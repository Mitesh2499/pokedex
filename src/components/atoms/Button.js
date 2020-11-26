import React from 'react';
import {TouchableWithoutFeedback, StyleSheet, Text, View} from 'react-native';
import colors from '../../assets/colors';

const Button = ({fontSize = 12, title, onPress, style}) => {
  let paddingVertical = 4;
  if (fontSize !== 12) paddingVertical = 8;
  return (
    <TouchableWithoutFeedback
      conatinerstyle={[styles.buttonTouch]}
      onPress={onPress}>
      <View style={[styles.button, {paddingVertical: paddingVertical}, style]}>
        <Text style={[styles.buttonText, {fontSize: fontSize}]}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonTouch: {
    borderRadius: 15,
    marginVertical: 10,
  },
  button: {
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginVertical: 5,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
