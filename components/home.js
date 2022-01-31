import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Home() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Body */}
          <Text style={styles.baseText}>app in progress Home screen</Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#333",
      alignItems: "center",
      justifyContent: "space-around",
    },
    content:{
      padding: 40,
    },
    baseText: {
      color: "white",
      fontFamily: 'lora-regular',
    },
  });
  