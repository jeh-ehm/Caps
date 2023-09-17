import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

function InitialPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/BatSafeU-Logo.png")}
          resizeMode="cover"
          style={styles.logo}
        ></Image>
      </View>
      <View style={styles.loginBtnContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("LoginPage")}
          style={styles.loginBtn}
        >
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.guestBtnContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("GuestPage")}
          style={styles.guestBtn}
        >
          <Text style={styles.btnTxt}>Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    height: 600,
    backgroundColor: "rgba(255,49,49,1)",
    alignItems: "center",
  },
  logo: {
    width: 133,
    height: 133,
    marginTop: 400,
  },
  loginBtnContainer: {
    width: 192,
    height: 61,
    marginTop: 30,
    alignSelf: "center",
  },
  loginBtn: {
    backgroundColor: "rgba(81,220,106,1)",
    borderRadius: 10,
    width: 192,
    height: 61,
    alignSelf: "center",
  },
  guestBtnContainer: {
    width: 192,
    height: 61,
    marginTop: 14,
    alignSelf: "center",
  },
  guestBtn: {
    backgroundColor: "rgba(38,152,246,1)",
    borderRadius: 10,
    width: 192,
    height: 61,
    alignSelf: "center",
  },
  btnTxt: {
    textAlign: "center",
    fontSize: 24,
    color: "rgba(255,255,255,1)",
    height: 39,
    width: 131,
    marginTop: 11,
    alignSelf: "center",
  },
});

export default InitialPage;
