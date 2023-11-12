import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Card } from '@rneui/themed';

class PopularMovie extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return <View style={styles.vparent}>
            <Text>Ini page Popular Movie</Text>
            {this.showData(this.state.data)}
        </View>
    }

    fetchData = () => {
        try {
            fetch('https://ubaya.me/react/160420016/movielist.php', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json()).then((json) => {
                this.setState(
                    this.state = {
                        data: json.data,
                    }
                )
            }).catch((error) => console.error(error));
        } catch (error) {
            console.log(error);
        }
    }

    showData(data) {
        return <FlatList
            data={data}
            keyExtractor={(item) => item.movie_id.toString()}
            renderItem={({ item }) => (
                <Card>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Image style={styles.imgavatar}
                        source={{
                            uri:
                                item.imgurl
                        }} />
                    <Text>{item.overview}</Text>
                </Card>
            )}
        />
    }
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

export default PopularMovie;
