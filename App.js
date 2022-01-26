import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from './components/header';
import Footer from './components/footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* Body */}
        <Text style={styles.baseText}>app in progress</Text>
      </View>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content:{
    padding: 40,
  },
  baseText: {
    color: "white",
  },
});
