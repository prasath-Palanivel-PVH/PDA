import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, Header } from "@react-navigation/stack";
import Scanner from "./Scanner";
import ScannerView from './ScannerView'
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="PVH Scanner" onPress={() => navigation.navigate("Scanner")} />
      <Button title="ScannerView" onPress={() => navigation.navigate("ScannerView")} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="ScannerView" component={ScannerView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
