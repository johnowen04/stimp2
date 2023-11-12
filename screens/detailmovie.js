import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from '@rneui/themed';
import { FlatList } from "react-native-gesture-handler";

class DetailMovie extends React.Component {
    constructor() {
        super();
        this.state = {
            movie_id: 0,
            is_fetched: false,
            data: {}

        }
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        if (!this.state.is_fetched) {
            this.state.movie_id = this.props.route.params.movie_id;
            this.fetchData();
            return <Text>Waiting JSON..</Text>
        } else {
            return <View style={styles.vparent}>
                <Card>
                    <Card.Title>{this.state.data.title}</Card.Title>
                    <Card.Divider />
                    <Card.Image style={styles.imgavatar}
                        source={{ uri: this.state.data.imgurl }}>
                    </Card.Image>
                    <Text style={{ marginBottom: 10 }}>
                        {this.state.data.overview}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        {this.state.data.homepage}
                    </Text>
                    <Card.Divider />
                    <Text>Genre:</Text>
                    <FlatList
                        data={this.state.data.genres}
                        keyExtractor={(item) => item.genre_name}
                        renderItem={({ item }) => (
                            <Text>{item.genre_name}</Text>
                        )}
                    />
                    <Card.Divider />
                    <Text>Casts:</Text>
                    <FlatList
                        data={this.state.data.casts}
                        keyExtractor={(item) => item.person_name}
                        renderItem={({ item }) => (
                            <Text>{item.person_name} as {item.character_name}</Text>
                        )}
                    />
                </Card>
            </View>

        }
    }

    fetchData = () => {
        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body: "id=" + this.state.movie_id
        };
        try {
            fetch('https://ubaya.me/react/160420016/detailmovie.php',
                options)
                .then(response => response.json())
                .then(resjson => {
                    this.setState(
                        this.state = {
                            is_fetched: true,
                            data: resjson.data
                        })
                });
        } catch (error) {
            console.log(error);
        }
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
    input: {
        height: 40,
        width: 200,
        borderWidth: 1,
        padding: 10,
    },
    viewRow: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: 'center',
        paddingRight: 50,
        margin: 3
    }
});

export default DetailMovie;
