import { TouchableOpacity, Text } from "react-native";
import IconButton from "./IconButton";
import { ThemedText } from "./ThemedText";
import { View } from "react-native-reanimated/lib/typescript/Animated";

interface QRCodeButton {
  qrcode: string;
}
export default function QRCodeButton({ qrcode }: QRCodeButton) {
  return (
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
      <ThemedText
        type="defaultSemiBold"
        style={{ color: "white" }}
      ></ThemedText>
      <View>
        <Text style={{ textAlign: "center" }}> test QR Code Value</Text>
      </View>
    </TouchableOpacity>
  );
}