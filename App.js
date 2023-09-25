import { StyleSheet, View, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [useNumber, setUseNumber] = useState(null);

  const pickedNumberHandler = (pickedNumber) => {
    setUseNumber(pickedNumber);
  };

  let screen = (
    <StartGameScreen
      pickedNumberHandler={pickedNumberHandler}
    ></StartGameScreen>
  );

  if (useNumber) {
    screen = <GameScreen></GameScreen>;
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
          {screen}
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
