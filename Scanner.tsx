import { center } from "@shopify/react-native-skia";
import {
  CameraView,
  useCameraPermissions,
  BarcodeScanningResult,
} from "expo-camera";
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

export default function Scanner() {
  const navigation = useNavigation(); 

  const [permission, requestPermission] = useCameraPermissions();
  const [code, setCode] = useState("");
  const [isCodeAvail, setIsCodeAvail] = useState(false);

  const getCodeDetails = () => {
    console.log('iscodeavailable : ' + isCodeAvail);

    if(isCodeAvail) {
      Alert.alert(code);
      navigation.navigate("ProductDetail");
    }
  };

  const handleBarcodeScanned = (result: BarcodeScanningResult) => { 
    console.log('result : ' + result);

    if (result) {
      console.dir(result);
      setCode(result.data);
      setIsCodeAvail(true);
      console.log(result.data);      
    }
  };

  const [focusArea, setFocusArea] = useState({
    x: 100, // x position of the border
    y: 100, // y position of the border
    width: 250, // width of the border
    height: 250, // height of the border
  });

  if (permission?.granted) {
    return (
      <View style={styles.pageView}>
        <CameraView
          style={styles.camera}
          facing="back"
          onBarcodeScanned={(result) => { handleBarcodeScanned(result); setIsCodeAvail(!isCodeAvail); }}
        ></CameraView>
        <TouchableOpacity style={styles.button} onPress={() => { getCodeDetails(); } }>
          <Text style={{ color: "black" }}>Scan to get details</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    console.dir(permission);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ textAlign: "center" }}>QR Code Scanner</Text>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button title="Grant Permission" onPress={requestPermission} />
        </View>
      </View>
    );
  }
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
