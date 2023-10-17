import { StyleSheet, View, Text, Button, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import React from "react";
import { DATA } from "../classes/buku";

export default function Book({ navigation }) {
    return (
        <View style={styles.vparent}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <View style={styles.vparent}>
                        <Text>{item.judul}</Text>
                        <Image
                            style={styles.imgresep}
                            source={{
                                uri:
                                    item.cover
                            }} />
                        <Text>{item.desk}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    vparent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgresep: {
        width: 300,
        height: 400,
    },
});