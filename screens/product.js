import { StyleSheet, View, Text, Button, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import React from "react";

import { DATA } from "../classes/resep";

export default function Product({ navigation }) {
    return (
        <View style={styles.vparent}>
            <Text >Ini Product</Text>
            <Button
                title="Product 1"
                onPress={() => navigation.navigate("Product Detail", { id: 1 })}
            />
            <Button
                title="Product 2"
                onPress={() => navigation.navigate("Product Detail", { id: 2 })}
            />
            <Button
                title="Go to About page"
                onPress={() => navigation.navigate("About")}
            />

            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <View style={styles.vparent}>
                        <Text>{item.nama}</Text>
                        <Image
                            style={styles.imgresep}
                            source={{
                                uri:
                                    item.photo
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