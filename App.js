import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [useNumber, setUseNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [rounds, setRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const cleanup = () => {
    setGameOver(false);
    setUseNumber(null);
    setRounds(0);
  };
  const incrementRound = () => {
    setRounds((round) => round + 1);
  };
  const pickedNumberHandler = (pickedNumber) => {
    setUseNumber(pickedNumber);
  };

  let screen = (
    <StartGameScreen
      pickedNumberHandler={pickedNumberHandler}
    ></StartGameScreen>
  );

  if (useNumber) {
    screen = (
      <GameScreen
        incrementRound={incrementRound}
        userNumber={useNumber}
        finishGame={() => setGameOver(true)}
      ></GameScreen>
    );
  }

  if (gameOver) {
    screen = (
      <GameOver
        startNewGame={cleanup}
        rounds={rounds}
        userNumber={useNumber}
      ></GameOver>
    );
  }

  return (
    <>
      <StatusBar style="light"></StatusBar>
      <LinearGradient style={styles.container} colors={["#ddb52f", "#4e0329"]}>
        <ImageBackground
          source={require("./assets/background.png")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
