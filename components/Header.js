import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import logo from "../assets/Ouigo_logo.png";
import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";

import ThemeContext from "../components/ThemeContext";

const Header = props => {
  const contextValue = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <TouchableOpacity
          style={styles.logo}
          onPress={() => navigation.navigate("Home")}
        >
          <Image style={styles.logo} resizeMode="contain" source={logo}></Image>
        </TouchableOpacity>
      </View>
      {props.close ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={40} color="white" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10
  },
  logo: {
    width: 80,
    height: 80,
    paddingLeft: 10
  }
});
