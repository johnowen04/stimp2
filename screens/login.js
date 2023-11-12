import React from "react";
import { Card } from '@rneui/themed';
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-web";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    render() {
        return (
            <Card>
                <Card.Title>Silakan Login</Card.Title>
                <Card.Divider />
                <View style={styles.viewRow}>
                    <Text>Username </Text>
                    <TextInput style={styles.input}
                        onChangeText={(username) => this.setState({ username })} />
                </View>
                <View style={styles.viewRow}>
                    <Text>Password </Text>
                    <TextInput secureTextEntry={true} style={styles.input}
                        onChangeText={(password) => this.setState({ password })} />
                </View>
                <View style={styles.viewRow}>
                    <Button style={styles.button} title="Submit" onPress={() => this.doLogin(this.state.username, this.state.password)} />
                </View>
            </Card>
        );
    }

    doLogin = async (username, password) => {
        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body: "user_id=" + username + "&user_password=" + password
        };

        const response = await fetch('http://ubaya.me/react/160420016/login.php',
            options);
        const json = await response.json();

        if (json.result == 'success') {

            try {
                await AsyncStorage.setItem('username', username);
                alert('login sukses');
                DevSettings.reload();
            } catch (e) {
                alert(e);
            }
        }
        else {
            alert('username atau paassword salah')
        }
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 200,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        height: 40,
        width: 200,
    },
    viewRow: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: 'center',
        paddingRight: 50,
        margin: 3
    }
})

export default Login;
