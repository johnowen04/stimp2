import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { Card } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { Button } from "react-native-web";

class PopularMovie extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            cari: "",
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return <View style={styles.vparent}>
            <Text>Ini page Popular Movie</Text>
            <Card>
                <View style={styles.viewRow} >
                    <Text>Cari </Text>
                    <TextInput style={styles.input}
                        onChangeText={(cari) => this.setState({ cari })}
                        onSubmitEditing={this.fetchData}
                    />
                </View>
            </Card>

            {this.showData(this.state.data)}
        </View>
    }

    fetchData = () => {
        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body: "cari=" + this.state.cari
        };

        try {
            fetch('https://ubaya.me/react/160420016/movielist.php',
                options
            ).then((response) => response.ok ? response.json() : Promise.reject()).then((json) => {
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
                    <Button
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW DETAIL'
                        onPress={() => {
                            const { navigation } = this.props;
                            navigation.navigate("DetailMovie", { movie_id: item.movie_id })
                        }
                        }
                    />
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

export default function (props) {
    const navigation = useNavigation();
    return <PopularMovie {...props} navigation={navigation} />;
}
