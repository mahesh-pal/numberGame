import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

const width = Dimensions.get("window").width;
function GameOver({ startNewGame, rounds, userNumber }) {
  return (
    <View style={styles.container}>
      <View>
        <Title> GAME OVER</Title>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.png")} style={styles.image} />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{rounds}</Text>
          rounds to guess the number
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={startNewGame}>Start a New Game</PrimaryButton>
      </View>
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.acccent500,
    textAlign: "center",
  },
  imageContainer: {
    borderRadius: width < 380 ? 75 : 150,
    overflow: "hidden",
    width: width < 380 ? 150 : 300,
    height: width < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
