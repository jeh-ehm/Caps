import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./homePage";

const Stack = createNativeStackNavigator();

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image
          source={require("../assets/images/BatSafeU-Logo.png")}
          resizeMode="contain"
          style={styles.logo}
        ></Image>
      </View>
      <View style={styles.loginPanel}>
        <TextInput
          placeholder="SR-CODE"
          textBreakStrategy="simple"
          dataDetector="none"
          selectionColor="rgba(230, 230, 230,1)"
          style={styles.srCode}
        ></TextInput>
        <TextInput
          placeholder="PASSWORD"
          textBreakStrategy="simple"
          dataDetector="none"
          selectionColor="rgba(230, 230, 230,1)"
          secureTextEntry={true}
          inlineImagePadding={100}
          style={styles.password}
        ></TextInput>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        >
          <Text style={styles.loginBtnTxt}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function LoginPage() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: 550,
    backgroundColor: "#ff3131",
    alignItems: "center",
  },
  logo: {
    width: 124,
    height: 124,
    marginTop: 325,
  },
  loginPanel: {
    alignItems: "center",
  },
  srCode: {
    // fontFamily: "poppins-300",
    color: "#121212",
    height: 53,
    width: 236,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 11,
    textAlign: "center",
    fontSize: 16,
    borderBottomWidth: 1,
    marginTop: 34,
  },
  password: {
    // fontFamily: "poppins-300",
    color: "#121212",
    height: 53,
    width: 236,
    borderRadius: 11,
    textAlign: "center",
    // inlineImageLeft: "",
    letterSpacing: 0,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginTop: 21,
  },
  loginBtn: {
    width: 209,
    height: 51,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "rgba(68,202,83,1)",
    marginTop: 31,
  },
  loginBtnTxt: {
    // fontFamily: "poppins-600",
    color: "rgba(68,202,83,1)",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 75,
  },
});

export default LoginPage;
