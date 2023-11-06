import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Card } from '@rneui/themed';

function showData(data) {
    return <FlatList
        data={data}
        keyExtractor={(item) => item.person_id.toString()}
        renderItem={({ item }) => (
            <Card>
                <Card.Title>{item.person_name}</Card.Title>
                <Card.Image style={styles.imgresep}
                    source={{
                        uri:
                            item.person_url
                    }} />
            </Card>
        )}
    />
}

export default function PopularActor({ navigation }) {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetch('https://ubaya.me/react/160420016/popularactor.php', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json()).then((json) => {
            setActors(json.data);
        }).catch((error) => console.error(error));
    });



    return (
        <View style={styles.vparent}>
            <Text >Ini Popular Actor</Text>
            {showData(actors)}
        </View>
    );
}

const styles = StyleSheet.create({
    vparent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgavatar: {
        width: 300,
        height: 400,
    },
});