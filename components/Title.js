import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    borderWidth: 2,
    textAlign: "center",
    borderColor: "white",
    color: "white",
    padding: 10,
  },
});
