import React from "react";
import { StyleSheet, View, Image } from "react-native";

import ThemeBox from "./ThemeBox";

const ThemeBoxes = () => {
  return (
    <View style={styles.container}>
      <ThemeBox iconName="train" text="Effectuer une réservation" />
      <ThemeBox iconName="ticket" text="Mes billets" />
      <ThemeBox iconName="pencil" text="Modifier ma réservation" />
      <ThemeBox iconName="time" text="Infos en temps réel" />
      <ThemeBox iconName="help" text="Aide & contact" />
      <ThemeBox iconName="subscribe" text="M'inscrire à la newsletter" />
    </View>
  );
};

export default ThemeBoxes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 50
    // backgroundColor: "black"
  }
});
