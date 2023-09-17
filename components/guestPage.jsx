import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";

function GuestPage() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.banner}>
        <Text style={styles.bannerText}>BatSafeU</Text>
      </View> */}

      <Text style={styles.title}>Guest Mode</Text>

      <View style={styles.guestContainer}>
        <View style={styles.takeAPhotoColumn}>
          <Text style={styles.takeAPhoto}>Take A Photo</Text>
          <View style={styles.cameraView}>
            <View style={styles.camerScreen}>
              <View style={styles.cameraBtnFiller}></View>
              <TouchableOpacity style={styles.cameraBtn}>
                <FeatherIcon name="camera" style={styles.icon}></FeatherIcon>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.takeAPhotoColumnFiller}></View>
        <TouchableOpacity style={styles.reportBtn}>
          <Text style={styles.report}>Report</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    height: 115,
    backgroundColor: "#ff3131",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerText: {
    color: "white",
    fontSize: 40,
  },
  title: {
    // fontFamily: "montserrat-700",
    color: "#121212",
    fontSize: 16,
    width: 111,
    height: 19,
    marginTop: 10,
    marginLeft: 19,
  },
  guestContainer: {
    height: 800,
    backgroundColor: "rgba(255,49,49,1)",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginTop: 11,
  },
  takeAPhoto: {
    // fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    alignSelf: "center",
  },
  cameraView: {
    height: 580,
    marginTop: 13,
  },
  camerScreen: {
    height: 580,
    backgroundColor: "#E6E6E6",
    borderRadius: 12,
    marginLeft: 18,
    marginRight: 18,
  },
  cameraBtnFiller: {
    flex: 1,
  },
  cameraBtn: {
    width: 69,
    height: 53,
    marginBottom: 11,
    alignSelf: "center",
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 57,
    marginTop: -2,
    marginLeft: 6,
  },
  takeAPhotoColumn: {
    marginTop: 21,
  },
  takeAPhotoColumnFiller: {
    flex: 1,
  },
  reportBtn: {
    width: 146,
    height: 48,
    backgroundColor: "rgba(62,213,95,1)",
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 80,
    alignSelf: "center",
  },
  report: {
    // fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    alignSelf: "center",
  },
});

export default GuestPage;
