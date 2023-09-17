// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import HomePage from "./components/homePage.jsx";
import LoginPage from "./components/loginPage.jsx";
import ThreatModule from "./components/modules/threatModule.jsx";
import IncidentModule from "./components/modules/incidentModule.jsx";
import GuidelinesModule from "./components/modules/guidelinesModule.jsx";
import SafetyTipsModule from "./components/modules/safetyTipsModule.jsx";
import EmergencyContactsModule from "./components/modules/emergencyContactsModules.jsx";
import GuestPage from "./components/guestPage.jsx";
import InitialPage from "./components/initialPage.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Temporary commented out to show different pages while in development

    // <View style={styles.container}>
    //   <View style={styles.logoContainer}>
    //     <Image
    //       source={require("./assets/images/BatSafeU-Logo.png")}
    //       resizeMode="cover"
    //       style={styles.logo}
    //     ></Image>
    //   </View>
    //   <View style={styles.loginBtnContainer}>
    //     <TouchableOpacity
    //       onPress={() => props.navigation.navigate("Login")}
    //       style={styles.loginBtn}
    //     >
    //       <Text style={styles.btnTxt}>Login</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={styles.guestBtnContainer}>
    //     <TouchableOpacity
    //       onPress={() => props.navigation.navigate("Login")}
    //       style={styles.guestBtn}
    //     >
    //       <Text style={styles.btnTxt}>Guest</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
    // <HomePage />
    // <LoginPage />
    // <ThreatModule />
    // <IncidentModule />
    // <GuidelinesModule />
    // <SafetyTipsModule />
    // <EmergencyContactsModule />
    // <GuestPage />
    // <InitialPage />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="InitialPage"
          component={InitialPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GuestPage"
          component={GuestPage}
          options={{
            title: "BatSafeU",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerTitleStyle: { fontSize: 40 },
            headerStyle: {
              backgroundColor: "#ff3131",
              marginBottom: 20,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
