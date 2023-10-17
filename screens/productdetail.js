import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function ProductDetail({ route }) {
    const { id } = route.params;
    return (
        <View >
            <Text >Ini Detail Product {id} </Text>
        </View>
    );
}
