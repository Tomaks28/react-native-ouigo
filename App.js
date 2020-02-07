import React, { useState, useContext } from "react";
import { StyleSheet, View, Image } from "react-native";
import Constants from "expo-constants";

import ThemeContext from "./components/ThemeContext";
import ThemeBoxes from "./components/ThemeBoxes";
import logo from "./assets/Ouigo_logo.png";

const contextValue = {
  themeColor: "#01A1D5",
  themeBoxColor: "#E50A70",
  iconSize: 60,
  iconColor: "white"
};

const App = () => {
  return (
    <ThemeContext.Provider value={contextValue}>
      <View style={styles.container}>
        <Image style={styles.image} resizeMode="contain" source={logo}></Image>
        <ThemeBoxes />
      </View>
    </ThemeContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: contextValue.themeColor,
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
    paddingRight: 10
  },
  image: {
    width: "20%",
    height: "10%"
  }
});
