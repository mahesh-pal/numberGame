import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InfoText from "../components/InfoText";
import { Ionicons } from "@expo/vector-icons";

let min = 1;
let max = 100;
function GameScreen({ userNumber, finishGame, incrementRound }) {
  const [currentGuess, setCurrentGuess] = useState(() =>
    generateRandomBetween(1, 100, userNumber)
  );

  useEffect(() => {
    if (currentGuess == userNumber) {
      finishGame();
    }
  }, [currentGuess]);

  useEffect(() => {
    min = 1;
    max = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction == "lower" && currentGuess < userNumber) ||
      (direction == "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("wrong choise");
      return;
    }
    if (direction == "lower") {
      max = currentGuess;
    }

    if (direction == "higher") {
      min = currentGuess + 1;
    }
    setCurrentGuess(generateRandomBetween(min, max, currentGuess));
    incrementRound();
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Score</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InfoText style={styles.info}>Higher or Lower ?</InfoText>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(null, "higher")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    paddingTop: 50,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  info: {
    marginBottom: 12,
  },
});

export default GameScreen;

function generateRandomBetween(min, max, exclude) {
  console.log("min = " + min + " max=" + max);
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  if (randNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randNum;
  }
}
