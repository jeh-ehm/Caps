import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const DATA = [
  {
    title: "Hello",
  },
  {
    title: "This",
  },
  {
    title: "Is",
  },
  {
    title: "A",
  },
  {
    title: "Test",
  },
  {
    title: "Hello",
  },
  {
    title: "Hello",
  },
  {
    title: "Hello",
  },
  {
    title: "Hello",
  },
  {
    title: "Hello",
  },
];

const Item = ({ title }) => (
  <View style={styles.contentComponent}>
    <Text>{title}</Text>
  </View>
);

function SafetyTipsModule() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safety Tips</Text>
      <TouchableOpacity style={styles.closeBtn}>
        <Icon name="ios-close-circle-outline" style={styles.closeIcon}></Icon>
      </TouchableOpacity>
      <View style={styles.line} />
      <View style={styles.scrollableArea}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,49,49,1)",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    height: 546,
    top: 100,
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
  scrollableArea: {
    top: 80,
    left: 0,
    height: 440,
    position: "absolute",
    right: 0,
    paddingTop: 15,
  },
  contentComponent: {
    width: 360,
    height: 65,
    backgroundColor: "#E6E6E6",
    borderRadius: 14,
    marginBottom: 21,
    alignSelf: "center",
  },
});

export default SafetyTipsModule;
