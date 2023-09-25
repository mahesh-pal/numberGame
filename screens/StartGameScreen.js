import { TextInput, Alert } from "react-native";
import { View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";

function StartGameScreen({ pickedNumberHandler }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberChangeHandler = (text) => {
    setEnteredNumber(text);
  };

  const restNumber = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredNumber);

    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid Number", " Number has to be between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: restNumber,
        },
      ]);
      return;
    }
    pickedNumberHandler(enteredNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberChangeHandler}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={restNumber}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 6,
    elevation: 4,
    shadowColor: "black",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.acccent500,
    color: Colors.acccent,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});

export default StartGameScreen;
