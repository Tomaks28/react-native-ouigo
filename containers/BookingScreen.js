import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Entypo, FontAwesome } from "@expo/vector-icons";

import Constants from "expo-constants";

import ThemeContext from "../components/ThemeContext";
import Header from "../components/Header";

const BookingScreen = () => {
  const contextValue = useContext(ThemeContext);
  const [data, setData] = useState({
    departure: "",
    arrival: "",
    departureDate: new Date().toString().substr(0, 10),
    arrivalDate: ""
  });
  const navigation = useNavigation();
  console.log(new Date().toString());

  const updateDepartureStation = station => {
    setData({ ...data, departure: station });
  };

  const updateArrivalStation = station => {
    setData({ ...data, arrival: station });
  };

  const updateDepartureDate = date => {
    setData({ ...data, departureDate: date.toString().substr(0, 10) });
  };

  const updateArrivalDate = date => {
    setData({ ...data, arrivalDate: date.toString().substr(0, 10) });
  };

  return (
    <View
      style={[styles.container, { backgroundColor: contextValue.themeColor }]}
    >
      {/* Header */}
      <Header close={true} />
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          padding: 10,
          marginTop: 10
        }}
      >
        {/* Stations Selection */}
        {/* Depart Station */}
        <Text style={[styles.margin, styles.text]}>Gare de départ</Text>
        <TextInput
          style={[styles.input, styles.margin]}
          onFocus={() => {
            navigation.navigate("Station", {
              title: "Gare de départ",
              setDataFunc: updateDepartureStation
            });
          }}
          value={data.departure}
        />
        {/* permute Stations */}
        <TouchableOpacity
          style={[styles.margin, { alignItems: "flex-end", paddingRight: 20 }]}
          onPress={() => {
            setData({
              ...data,
              departure: data.arrival,
              arrival: data.departure
            });
          }}
        >
          <Entypo name="cycle" size={30} color={contextValue.themeColor} />
        </TouchableOpacity>
        {/* Depart Station */}
        <Text style={[styles.text]}>Gare d'arrivée</Text>
        <TextInput
          style={[styles.input, styles.margin]}
          onFocus={() => {
            navigation.navigate("Station", {
              title: "Gare d'arrivée",
              setDataFunc: updateArrivalStation
            });
          }}
          value={data.arrival}
        />

        {/****************************** Date Selection ******************************/}
        {/* Departure Date */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10
          }}
        >
          <View>
            <Text style={[styles.text]}>aller</Text>
            <TextInput
              style={[styles.input, styles.margin, styles.dateInput]}
              onFocus={() => {
                navigation.navigate("Calendar", {
                  title: "Date de départ",
                  setDataFunc: updateDepartureDate
                });
              }}
              value={data.departureDate}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Calendar", {
                  title: "Date de départ",
                  setDataFunc: updateDepartureDate
                });
              }}
            >
              <FontAwesome
                name="calendar"
                size={30}
                color={contextValue.themeColor}
              />
            </TouchableOpacity>
          </View>
          {/* Arrival Date */}
          <View>
            <Text style={[styles.text]}>retour</Text>
            <TextInput
              style={[styles.input, styles.margin, styles.dateInput]}
              onFocus={() => {
                navigation.navigate("Calendar", {
                  title: "Date d'arrivée",
                  setDataFunc: updateArrivalDate
                });
              }}
              value={data.arrivalDate}
            />
          </View>
        </View>
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
  },
  dateInput: {
    width: Dimensions.get("window").width * 0.45,
    textAlign: "center"
  }
});
