import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation";
import { Provider as PaperProvider } from "react-native-paper";
import FlashMessage from "react-native-flash-message";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Poppins_Regular: require("./assets/Fonts/Poppins-Regular.ttf"),
    Poppins_Medium: require("./assets/Fonts/Poppins-Medium.ttf"),
    Poppins_Bold: require("./assets/Fonts/Poppins-Bold.ttf"),

    //
  });

  if (!loaded) {
    return null;
  }
  return (
    <PaperProvider>
      <Navigation />
      <FlashMessage position="bottom" />
    </PaperProvider>
  );
}
