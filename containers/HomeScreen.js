import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import ThemeContext from "../components/ThemeContext";
import ThemeBoxes from "../components/ThemeBoxes";
import Header from "../components/Header";

const HomeScreen = () => {
  const contextValue = useContext(ThemeContext);
  return (
    <View
      style={[styles.container, { backgroundColor: contextValue.themeColor }]}
    >
      <Header />
      <ThemeBoxes />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
    paddingRight: 10
  },
  image: {
    width: "20%",
    height: "10%"
  }
});
