import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Score</Title>
      <View>
        <Text>Higher or Lower</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    paddingTop: 40,
  },
});

export default GameScreen;
