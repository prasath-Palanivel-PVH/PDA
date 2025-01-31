import axios from 'axios'
import { useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Linking,
  TouchableOpacity,
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function ProductDetail() {
  const navigation = useNavigation(); 

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ textAlign: "center" }}>Product Details</Text>
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageView: {
    backgroundColor: "black",
    height: "100%"
  },
  border: {
    position: "absolute",
    borderColor: "white", // Red border with some transparency
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
    color: "white",
  },
  camera: {
    width: "90%",
    left: 20,
    top : 10,
    alignItems: "center",
    height: "65%",
    borderColor: "white",
    borderWidth: 1,
    borderCurve: "circular",
    borderStartStartRadius: 10,
    borderStartEndRadius: 10,
    borderEndStartRadius: 10,
    borderEndEndRadius: 10,
    padding: 10
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    backgroundColor: 'white',
    color: "black",
    padding: 10,
    marginTop: 100,
    width: "50%",
    left: 100,
    height: 50,
    maxWidth: 400,
    alignItems: "center",
    borderRadius: 3,
    borderStartStartRadius: 10,
    borderStartEndRadius: 10,
    borderEndStartRadius: 10,
    borderEndEndRadius: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 40,
  },
  buttonStyle: {
    color: "#0E7AFE",
    fontSize: 20,
    textAlign: "center",
  },
});
