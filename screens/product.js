import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";

export default function Product({ navigation }) {
    return (
        <View >
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
        </View>
    );
}