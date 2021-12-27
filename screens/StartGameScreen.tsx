import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectNumber, setSelectNumber] = useState();

  const numberInputHandler = (inputText: any) => {
    setEnteredValue(inputText);
    // setEnteredValue(inputText.replace(/[^0-9]/g), '');
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    console.log('okay');
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      return;
    }
    setConfirmed(true);
    setEnteredValue('');
    setSelectNumber(chosenNumber);
  };

  let confirmedOutput: any;
  if (confirmed) {
    confirmedOutput = <Text> Chosen Number : {selectNumber}</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={() => alert('Pressed')}>
      <View style={styles.startgame}>
        <Text style={styles.startgameTitle}> Start A New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select A Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        <Text>{confirmedOutput}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  startgame: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  startgameTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    alignItems: 'center',
    maxWidth: '80%',
    backgroundColor: Colors.tertiary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  // btn: {
  //   borderColor: '#ccc',
  //   borderWidth: 1,
  //   borderRadius: 10,
  //   overflow: 'hidden',
  // },
  input: {
    width: 230,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    color: 'red',
    height: 50,
  },
});

export default StartGameScreen;
