import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// Component imports
import ThemeContext from "./components/ThemeContext";

// Container imports
import HomeScreen from "./containers/HomeScreen";
import BookingScreen from "./containers/BookingScreen";
import StationScreen from "./containers/StationScreen";
import CalendarScreen from "./containers/CalendarScreen";

const App = () => {
  const [userToken, setUserToken] = useState("");

  const contextValue = {
    themeColor: "#01A1D5",
    themeBoxColor: "#E50A70",
    iconSize: 60,
    iconColor: "white",
    userToken,
    setUserToken,
    stationsURL:
      "https://www.ouigo.com/api/journeys-allowed-by-station-code?station_code=PT1"
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Home Screen */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ header: () => null }}
          />
          {/* Booking Screen */}
          <Stack.Screen
            name="Booking"
            component={BookingScreen}
            options={{ header: () => null }}
          />
          {/* Station Screen */}
          <Stack.Screen
            name="Station"
            component={StationScreen}
            options={{ header: () => null }}
          />
          {/* Calendar Screen */}
          <Stack.Screen
            name="Calendar"
            component={CalendarScreen}
            options={{ header: () => null }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;

// https://www.ouigo.com/api/journeys-allowed-by-station-code?station_code=PT1
// https://www.ouigo.com/ajax/station/closest?lgt=2.2635708&lat=48.8276497
