import React, { useState, useContext } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";

import Constants from "expo-constants";

import ThemeContext from "../components/ThemeContext";
import Header from "../components/Header";

const BookingScreen = () => {
  const contextValue = useContext(ThemeContext);
  const [data, setData] = useState({ departure: "", arrival: "" });
  const navigation = useNavigation();

  const updateDepartureStation = station => {
    setData({ ...data, departure: station });
  };

  const updateArrivalStation = station => {
    setData({ ...data, arrival: station });
  };

  return (
    <View
      style={[styles.container, { backgroundColor: contextValue.themeColor }]}
    >
      <Header close={true} />
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          padding: 10,
          marginTop: 10
        }}
      >
        <Text style={[styles.margin, styles.text]}>Gare de départ</Text>
        <TextInput
          style={[styles.input, styles.margin]}
          onFocus={() => {
            navigation.setOptions({
              setDataFunc: updateArrivalStation
            });
            navigation.navigate("Station", {
              title: "Gare de départ",
              setDataFunc: updateDepartureStation
            });
          }}
          value={data.departure}
        />
        <Text style={[styles.margin, styles.text]}>Gare d'arrivée</Text>
        <TextInput
          style={[styles.input, styles.margin]}
          onFocus={() => {
            navigation.setOptions({
              setDataFunc: updateArrivalStation
            });
            navigation.navigate("Station", {
              title: "Gare d'arrivée",
              setDataFunc: updateArrivalStation
            });
          }}
          value={data.arrival}
        />
      </View>
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white"
  },
  image: {
    width: "20%",
    height: "10%"
  },
  input: {
    height: 44,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10
  },
  margin: {
    marginTop: 10
  },
  text: {
    textTransform: "uppercase"
  }
});
