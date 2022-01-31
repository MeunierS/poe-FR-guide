import React, { useState } from 'react';
import * as Font from 'expo-font';
import  AppLoading from 'expo-app-loading';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard,} from "react-native";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
// import {} from "@expo/vector-icons";

const getFonts = () => Font.loadAsync({
    "lora-regular": { uri: require("./assets/fonts/Lora-Regular.ttf"),
                      display: Font.FontDisplay.FALLBACK,},
    "lora-bold": {  uri: require("./assets/fonts/Lora-Bold.ttf"),
                    display: Font.FontDisplay.FALLBACK,},
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          //dismissing keyboard when touching outside said keyboard
          Keyboard.dismiss();}}>
        <View style={styles.container}>
          <Header />
          <Home />
          <Footer />
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={() => console.log('error while loading fonts')}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    padding: 40,
  },
  baseText: {
    color: "white",
  },
});
