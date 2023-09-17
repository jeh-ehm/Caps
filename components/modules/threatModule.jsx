import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function ThreatModule(props) {
  function onClose() {
    props.state(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report A Threat</Text>
      <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
        <Icon name="ios-close-circle-outline" style={styles.closeIcon}></Icon>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TextInput
        placeholder="Threat Title"
        style={styles.threatInput}
      ></TextInput>
      <TextInput
        placeholder="Location"
        style={styles.locationInput}
      ></TextInput>
      <TextInput
        placeholder="Description"
        numberOfLines={10}
        style={styles.descriptionInput}
      ></TextInput>
      <View style={styles.buttonContainer}>
        <View style={styles.submitBtnRow}>
          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pictureBtn}>
            <Text style={styles.takeAPicture}>Take a Picture</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,49,49,1)",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    height: 650,
    alignItems: "center",
  },
  title: {
    // fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    marginTop: 17,
  },
  closeBtn: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
  },
  line: {
    width: 251,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 17,
    alignSelf: "center",
  },
  threatInput: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    height: 70,
    width: 360,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 8,
    marginTop: 18,
    alignSelf: "center",
    paddingLeft: 20,
    fontSize: 20,
  },
  locationInput: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    height: 65,
    width: 360,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 8,
    marginTop: 23,
    alignSelf: "center",
    paddingLeft: 20,
    fontSize: 18,
  },
  descriptionInput: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    height: 250,
    width: 360,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 14,
    marginTop: 22,
    paddingTop: 15,
    paddingLeft: 20,
    alignSelf: "center",
    textAlignVertical: "top", // Start text from the top
    fontSize: 18,
  },
  buttonContainer: {
    width: 282,
    height: 38,
    flexDirection: "row",
    marginTop: 45,
    alignSelf: "center",
  },
  submitBtn: {
    width: 128,
    height: 38,
    backgroundColor: "rgba(62,213,95,1)",
    borderRadius: 8,
  },
  submitText: {
    // fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 8,
    textAlign: "center",
  },
  pictureBtn: {
    width: 128,
    height: 38,
    backgroundColor: "rgba(62,213,95,1)",
    borderRadius: 8,
    justifyContent: "center",
    marginLeft: 26,
  },
  takeAPicture: {
    // fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    alignSelf: "center",
  },
  submitBtnRow: {
    height: 38,
    flexDirection: "row",
    flex: 1,
  },
});

export default ThreatModule;
