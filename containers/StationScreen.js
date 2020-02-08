import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import axios from "axios";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

import ThemeContext from "../components/ThemeContext";
import { FlatList } from "react-native-gesture-handler";

const StationScreen = ({ route }) => {
  const contextValue = useContext(ThemeContext);
  const navigation = useNavigation();

  // All states of composant
  const [search, setSearch] = useState("");
  const [allStations, setAllStations] = useState("");
  const [nearestStations, setNearestStations] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetching data of all stations by using SNCF API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.ouigo.com/api/journeys-allowed-by-station-code?station_code=PT1"
        );
        setAllStations(response.data);
      } catch {
        alert("problem");
      }
    };
    fetchData();
  }, []);

  return (
    <View
      style={[styles.container, { backgroundColor: contextValue.themeColor }]}
    >
      <Text style={styles.title}>{route.params.title}</Text>
      <View
        style={{
          backgroundColor: contextValue.themeColor,
          padding: 10,
          marginTop: 10,
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
          border: "solid rgba(#fff, 0.2)"
        }}
      >
        <Entypo
          styles={styles.locationPin}
          name="location-pin"
          size={40}
          // color={contextValue.themeColor}
          color="white"
        />
        <TextInput
          // style={[styles.input, styles.margin, styles.locationPin]}
          style={[styles.input, styles.margin]}
          onChangeText={text => setSearch(text)}
          value={search}
          placeholder="Choississez une gare"
        />
      </View>
      <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
          onPress={async () => {
            setIsLoading(true);
            try {
              const response = await axios.get(
                "https://www.ouigo.com/ajax/station/closest?lgt=2.2635708&lat=48.8276497"
              );

              const data = [
                {
                  distence: 4,
                  station: "87391003",
                  short_name: "Paris Montparnasse"
                },
                {
                  distence: 8,
                  station: "87686006",
                  short_name: "Paris Gare de Lyon"
                },
                {
                  distence: 11,
                  station: "87393702",
                  short_name: "Paris Massy TGV"
                },
                {
                  distence: 29,
                  station: "87271494",
                  short_name: "Paris Aéroport Roissy-CDG 2"
                },
                {
                  distence: 38,
                  station: "87111849",
                  short_name: "Paris Marne-La-Vallée-Chessy"
                }
              ];
              console.log(response.data);
              setNearestStations(data);
              // setNearestStations(response.data);
              setIsLoading(false);
            } catch {
              alert("problem");
            }
          }}
        >
          <MaterialIcons
            name="my-location"
            size={30}
            color={contextValue.themeColor}
          />
          <Text style={{ color: contextValue.themeColor }}>Autour de moi</Text>
        </TouchableOpacity>
        {/* Print nearest stations of my current position */}
        {isLoading ? (
          <ActivityIndicator />
        ) : nearestStations ? (
          nearestStations.map((cur, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                route.params.setDataFunc(cur.short_name);
                navigation.navigate("Booking");
              }}
            >
              <Text>
                {cur.short_name} à {cur.distence}km
              </Text>
            </TouchableOpacity>
          ))
        ) : null}
        {/* Print all SNCF stations */}
        <Text style={{ fontSize: 20, backgroundColor: "lightgrey" }}>
          Toutes Les gares
        </Text>
        {allStations
          ? allStations.map((cur, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  route.params.setDataFunc(cur.short_name);
                  navigation.navigate("Booking");
                }}
              >
                <Text>{cur.short_name}</Text>
              </TouchableOpacity>
            ))
          : null}
      </ScrollView>
    </View>
  );
};

export default StationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white"
    // paddingLeft: 10
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 25
  },
  locationPin: {
    position: "absolute",
    top: 0
  },
  image: {
    width: "20%",
    height: "10%"
  },
  input: {
    paddingLeft: 20,
    height: 40,
    // width: "100%",
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white"
  },
  margin: {
    marginTop: 10
  },
  text: {
    textTransform: "uppercase"
  }
});
