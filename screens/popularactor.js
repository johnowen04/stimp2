import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import React from "react";
import { Card } from '@rneui/themed';

function showData(data) {
    return <FlatList
        data={data}
        keyExtractor={(item) => item.person_id.toString()}
        renderItem={({ item }) => (
            <Card>
                <Card.Title>{item.person_name}</Card.Title>
                <Card.Image
                    style={styles.imgavatar}
                    source={{
                        uri:
                            item.person_url_photo
                    }} />
            </Card>
        )}
    />
}

export default function PopularActor({ navigation }) {
    const movies = () => {
        fetch('http://ubaya.fun/react/160420016/popularactor.php', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json()).then((json) => {
            return json.actors;
        }).catch((error) => console.error(error));
    }

    return (
        <View style={styles.vparent}>
            <Text >Ini Popular Actor</Text>
            {showData(movies)}
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