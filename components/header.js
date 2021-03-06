import React from "react";
import { StyleSheet, Text, View, } from "react-native";


export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Les archives pour exilés</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        paddingTop: 40,
    },
    title:{
        color:"white",
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'lora-bold',
    }
});