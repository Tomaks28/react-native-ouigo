import React, { useContext } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import ThemeContext from "../components/ThemeContext";

const ThemeBox = props => {
  const contextValue = useContext(ThemeContext);
  const navigation = useNavigation();

  let icon = null;
  let screen = "";

  switch (props.iconName) {
    case "train":
      icon = (
        <MaterialIcons
          name="train"
          size={contextValue.iconSize}
          color={contextValue.iconColor}
        />
      );
      screen = "Booking";
      break;
    case "ticket":
      icon = (
        <FontAwesome
          name="ticket"
          size={contextValue.iconSize}
          color={contextValue.iconColor}
        />
      );
      screen = "Tickets";
      break;
    case "pencil":
      icon = (
        <MaterialCommunityIcons
          name="pencil"
          size={contextValue.iconSize}
          color={contextValue.iconColor}
        />
      );
      screen = "Modification";
      break;
    case "time":
      icon = (
        <MaterialIcons
          name="access-time"
          size={contextValue.iconSize}
          color={contextValue.iconColor}
        />
      );
      screen = "Information";
      break;
    case "help":
      icon = (
        <MaterialIcons
          name="help-outline"
          size={contextValue.iconSize}
          color={contextValue.iconColor}
        />
      );
      screen = "Help";
      break;
    case "subscribe":
      icon = (
        <Ionicons
          name="md-mail"
          size={contextValue.iconSize}
          color={contextValue.iconColor}
        />
      );
      screen = "Newsletter";
      break;
    default:
    // code block
  }

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: contextValue.themeBoxColor }
      ]}
      onPress={() => {
        navigation.navigate(screen);
      }}
    >
      {icon}
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default ThemeBox;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "49%",
    marginBottom: 10,
    borderRadius: 15,
    paddingTop: 10,
    justifyContent: "center",
    height: 100
  },
  image: {
    resizeMode: "contain"
  },
  text: {
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10
  }
});
