import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { BottomSheet, Button } from "@rneui/themed";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import OcticonsIcon from "react-native-vector-icons/Octicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Ellipse } from "react-native-svg";
import ThreatModule from "./modules/threatModule.jsx";

function HomePage() {
  function modalVisible(state) {
    setModalVisibility(state);
  }

  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>BatSafeU</Text>
      </View>

      <Text style={styles.whatText}>What to do?</Text>

      {/* <View style={styles.actionBar}>
        <View style={styles.threatBtnRow}>
          <TouchableOpacity style={styles.threatBtn}>
            <FeatherIcon
              name="alert-triangle"
              style={styles.threatIcon}
            ></FeatherIcon>
            <Text style={styles.reportThreat}>Report{"\n"}Threat</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.incidentBtn}>
            <FeatherIcon
              name="alert-circle"
              style={styles.incidentIcon}
            ></FeatherIcon>
            <Text style={styles.reportIncident}>Report{"\n"}Incident</Text>
          </TouchableOpacity>

          <View style={styles.guidelinesBtnStack}>
            <TouchableOpacity style={styles.guidelinesBtn}>
              <View style={styles.guidelinesIconStack}>
                <OcticonsIcon
                  name="checklist"
                  style={styles.guidelinesIcon}
                ></OcticonsIcon>
                <Text style={styles.guideLines}>Guide{"\n"}lines</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.safetyTipsBtn}>
              <View style={styles.safetyTipsIconStack}>
                <MaterialCommunityIconsIcon
                  name="magnify"
                  style={styles.safetyTipsIcon}
                ></MaterialCommunityIconsIcon>
                <Text style={styles.safetyTipsText}>Safety{"\n"}Tips</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.emergencyContactsBtn}>
            <View style={styles.emergencyContactsIconStack}>
              <MaterialCommunityIconsIcon
                name="phone"
                style={styles.emergencyContactsIcon}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.emergencyContactsText}>
                Emergency{"\n"}Contacts
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View> */}

      <View style={styles.actionBar}>
        <TouchableOpacity
          style={styles.threatBtn}
          onPress={() => {
            modalVisible(true);
          }}
        >
          <FeatherIcon
            name="alert-triangle"
            style={styles.threatIcon}
          ></FeatherIcon>
          <Text style={styles.reportThreat}>Report{"\n"}Threat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.incidentBtn}>
          <FeatherIcon
            name="alert-circle"
            style={styles.incidentIcon}
          ></FeatherIcon>
          <Text style={styles.reportIncident}>Report{"\n"}Incident</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.guidelinesBtn}>
          <View style={styles.guidelinesIconStack}>
            <OcticonsIcon
              name="checklist"
              style={styles.guidelinesIcon}
            ></OcticonsIcon>
            <Text style={styles.guideLines}>Guide{"\n"}lines</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.safetyTipsBtn}>
          <View style={styles.safetyTipsIconStack}>
            <MaterialCommunityIconsIcon
              name="magnify"
              style={styles.safetyTipsIcon}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.safetyTipsText}>Safety{"\n"}Tips</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.emergencyContactsBtn}>
          <View style={styles.emergencyContactsIconStack}>
            <MaterialCommunityIconsIcon
              name="phone"
              style={styles.emergencyContactsIcon}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.emergencyContactsText}>
              Emergency{"\n"}Contacts
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.panicButton}>
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 318.97 319.03" style={styles.ellipse}>
            <Ellipse
              strokeWidth={13}
              cx={159}
              cy={160}
              rx={153}
              ry={153}
              stroke="#ff3131"
              fill="rgba(255,255,255,1)"
            ></Ellipse>
          </Svg>
          <Text style={styles.quickAlert}>Quick{"\n"}Alert</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutBtn}>
        <FeatherIcon name="log-out" style={styles.logoutIcon}></FeatherIcon>
      </TouchableOpacity>
      <BottomSheet modalProps={{}} isVisible={modalVisibility}>
        <View style={styles.modalContainer}>
          <ThreatModule state={modalVisible} />
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
  },
  banner: {
    height: 70,
    backgroundColor: "#ff3131",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerText: {
    color: "white",
    fontSize: 40,
  },
  whatText: {
    fontSize: 16,
    paddingVertical: 10,
    marginLeft: 20,
  },
  batSafeURow: {
    height: 48,
    flexDirection: "row",
    flex: 1,
    marginRight: 21,
    marginLeft: 106,
    marginTop: 10,
  },
  whatToDo: {
    // fontFamily: "montserrat-regular",
    color: "#121212",
    fontSize: 16,
    width: 111,
    height: 19,
    marginTop: 7,
    marginLeft: 19,
  },
  actionBar: {
    backgroundColor: "rgba(230, 230, 230,0.33)",
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "space-around",
    alignItems: "center",
    height: 75,
    marginTop: 1,
  },
  threatBtn: {
    width: 66,
    height: 68,
    alignItems: "center",
  },
  threatIcon: {
    fontSize: 33,
  },
  reportThreat: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    marginTop: 1,
  },
  incidentBtn: {
    width: 66,
    height: 68,
    alignItems: "center",
  },
  incidentIcon: {
    fontSize: 33,
  },
  reportIncident: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    marginTop: 1,
    textAlign: "center",
  },
  guidelinesBtn: {
    width: 66,
    height: 68,
    alignItems: "center",
  },
  guidelinesIcon: {
    top: 0,
    left: 3,
    position: "absolute",
    fontSize: 33,
  },
  guideLines: {
    top: 34,
    position: "absolute",
    // fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
  },
  guidelinesIconStack: {
    width: 36,
    height: 67,
    marginLeft: 15,
  },
  safetyTipsBtn: {
    width: 66,
    height: 68,
    alignItems: "center",
  },
  safetyTipsIcon: {
    top: 0,
    position: "absolute",
    fontSize: 33,
  },
  safetyTipsText: {
    top: 34,
    position: "absolute",
    // fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    left: 0,
  },
  safetyTipsIconStack: {
    width: 39,
    height: 67,
  },
  emergencyContactsBtn: {
    width: 72,
    height: 68,
    alignItems: "center",
  },
  emergencyContactsIcon: {
    top: 0,
    left: 10,
    position: "absolute",
    fontSize: 33,
  },
  emergencyContactsText: {
    top: 34,
    position: "absolute",
    // fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    left: 0,
  },
  emergencyContactsIconStack: {
    width: 69,
    height: 67,
  },
  panicButton: {
    width: 319,
    height: 319,
    marginTop: 120,
    alignSelf: "center",
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 319,
    height: 319,
    position: "absolute",
  },
  quickAlert: {
    position: "absolute",
    // fontFamily: "poppins-600",
    color: "#121212",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 62,
    left: 70,
    top: 80,
    width: 181,
    height: 186,
  },
  ellipseStack: {
    width: 319,
    height: 319,
  },
  logoutBtn: {
    width: 41,
    height: 40,
    marginTop: 160,
    marginLeft: 19,
  },
  logoutIcon: {
    fontSize: 40,
    marginLeft: 1,
  },
  modalContainer: {
    height: 650,
  },
});

export default HomePage;
