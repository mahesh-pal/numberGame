import {
  TextInput,
  Alert,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InfoText from "../components/InfoText";

const height = Dimensions.get("window").height;
function StartGameScreen({ pickedNumberHandler }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();
  const marginTop = height < 350 ? 10 : 100;

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
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootScreen, { marginTop: marginTop }]}>
          <Title>Guess My Number</Title>
          <Card style={styles.inputContainer}>
            <InfoText>Enter a Number</InfoText>
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
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootScreen: {
    flex: 1,
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
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});

export default StartGameScreen;
