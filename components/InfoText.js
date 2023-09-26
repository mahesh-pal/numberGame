import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function InfoText({ children, style }) {
  return <Text style={[styles.info, style]}>{children}</Text>;
}

export default InfoText;

const styles = StyleSheet.create({
  info: {
    color: Colors.acccent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
