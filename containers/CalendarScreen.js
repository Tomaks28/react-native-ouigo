import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/core";

import Calendar from "react-native-calendar";

import ThemeContext from "../components/ThemeContext";

const CalendarScreen = ({ route }) => {
  const contextValue = useContext(ThemeContext);
  const navigation = useNavigation();

  const [date, setDate] = useState(
    route.params.selectedDate
      ? route.params.selectedDate
      : new Date().toString().substr(0, 10)
  );

  return (
    <View
      style={[styles.container, { backgroundColor: contextValue.themeColor }]}
    >
      <Text style={styles.title}>{route.params.title}</Text>
      <Calendar
        scrollEnabled={true}
        showControls
        dayHeadings={["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]}
        monthNames={[
          "Janvier",
          "Février",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Août",
          "Septembre",
          "Octobre",
          "Novembre",
          "Décembre"
        ]}
        nextButtonText={"Suivant >"}
        prevButtonText={"< Précédent"}
        selectedDate={date}
        onDateSelect={date => setDate(date)}
        // currentMonth={"2020-04-09"}
      />
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 100,
            borderRadius: 20
          }}
          onPress={() => {
            route.params.setDataFunc(date);
            navigation.navigate("Booking");
          }}
        >
          <Text
            style={{
              color: contextValue.themeColor,
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center"
            }}
          >
            Valider
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    paddingBottom: 20
  }
});

// *************************************************************
