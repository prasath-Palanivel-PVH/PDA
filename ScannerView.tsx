import React, { useState, useRef, useEffect } from "react";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
import {
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import IconButton from "./IconButton";
import { ThemedText } from "./ThemedText";
import { topLeft } from "@shopify/react-native-skia";
import { useNavigation } from "@react-navigation/native";
import { registerWebModule } from "expo";


interface QRCodeButton {
  handleOpenQRCode: () => void;
}

const ScannerView: React.FC = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [isCodeAvailable, setIsCodeAvailable] = useState<boolean>(false);
  const [qrCode, setqrCode] = useState<string>("");
 
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  function handlerBarCode(result: BarcodeScanningResult) {
    console.dir(result);
    
    if (result.data) {
      //console.log(result.data);
      setqrCode(result.data);
      setIsCodeAvailable(true);
      const navigation = useNavigation();
      navigation.navigate("ScannerView");
    }
  }

  if (permission?.granted) {
    return (
      <CameraView
        ref={cameraRef}
        style={styles.camera}        
        onBarcodeScanned={handlerBarCode}
      >
        {/* <View style={{ flex: 1, padding: 6 }}>
          {isCodeAvailable ? (
            <TouchableOpacity
              style={{
                width: 200,
                alignItems: "center",
                top: "65%",
                alignSelf: "center",
                padding: 6,
                borderWidth: 3,
                borderRadius: 10,
                borderStyle: "dashed",
                borderColor: "white",
              }}
            >
              <IconButton iosName="qrcode" androidName="qr-code" />
              <ThemedText type="defaultSemiBold" style={{ color : "white"}} data={qrCode}>
                
              </ThemedText>
            </TouchableOpacity>
          ) : null}
        </View> */}
      </CameraView>
    );
  }

  if (!permission?.granted) {
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    width: "60%",
    height: "60%",
    top:0,
    left: 100
  },
  blurContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  focusArea: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  focusBorder: {
    width: "100%",
    height: "100%",
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: "transparent",
  },
});

export default ScannerView;
