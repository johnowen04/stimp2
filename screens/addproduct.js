import { StyleSheet, View, Text, TextInput, Image, Button } from "react-native";
import React from "react";

export default function AddProduct({ route }) {
    return (
        <View >
            <Text >Ini Add Product</Text>
            <NamaMakanan></NamaMakanan>
            <DeskMakanan></DeskMakanan>
            <FotoMakanan></FotoMakanan>
            <Button
                title="SIMPAN"
                onPress={() => {
                    var id = DATA.length + 1;
                    DATA.push({
                        id: id,
                        nama: nama,
                        desk: desk,
                        photo: url
                    })
                    Alert.alert('Data Resep tersimpan');
                    props.navigation.goBack(null);
                }
                }
            />
        </View>
    );
}

const NamaMakanan = () => {
    const [nama, onChangeNama] = React.useState("");
    return (
        < TextInput
            style={styles.input}
            onChangeText={onChangeNama}
            value={nama}
            placeholder="nama masakan"
        />
    );
}

const DeskMakanan = () => {
    const [desk, onChangeDesk] = React.useState("");
    return (
        <TextInput
            style={styles.input2}
            onChangeText={onChangeDesk}
            value={desk}
            placeholder="deskripsi"
            multiline={true}
            numberOfLines={4}
            maxLength={100}
        />
    );
}

const FotoMakanan = () => {
    const [foto, onChangeFoto] = React.useState("");
    const [url, onSubmitFoto] = React.useState("https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg");

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeFoto}
                onSubmitEditing={(event) =>
                    onSubmitFoto(foto)
                }
                value={foto}
                placeholder="url" />
            <Image style={styles.imgresep}
                source={{ uri: url }} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
    input2: {
        height: 120,
        borderWidth: 1,
        padding: 10,
    },
});