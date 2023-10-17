import { StyleSheet, View, Text, Image, ImageBackground, ScrollView } from "react-native";
import React from "react";

export default function About() {
    return (
        <View style={styles.vparent}>
            <ScrollView>
                <ImageBackground
                    style={styles.imgkucing}
                    source={{
                        uri:
                            'http://placekitten.com/g/300/400?image=1'
                    }}
                >
                    <Image
                        source={require('../assets/missing.png')} />
                </ImageBackground>

                <ImageBackground
                    style={styles.imgkucing}
                    source={{
                        uri:
                            'http://placekitten.com/g/300/400?image=2'
                    }}
                >
                    <Image
                        source={require('../assets/missing.png')} />
                </ImageBackground>

                <ImageBackground
                    style={styles.imgkucing}
                    source={{
                        uri:
                            'http://placekitten.com/g/300/400?image=3'
                    }}
                >
                    <Image
                        source={require('../assets/missing.png')} />
                </ImageBackground>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    vparent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgkucing: {
        width: 300,
        height: 400,
    },
});
