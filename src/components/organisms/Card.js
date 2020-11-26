import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import colors from '../../assets/colors';
import {Button} from '../atoms';
import {width, height, Poke_Image_URL} from '../../utils';
const Card = ({name, imageURL, types, backgroundColor, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, {backgroundColor: backgroundColor}]}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.buttonContainer}>
            {types.map((item) => (
              <Button title={item.type.name} />
            ))}
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: imageURL,
            }}
            style={styles.image}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: width / 2 - 20,
    height: height / 6,
    paddingVertical: 5,
    paddingHorizontal: 15,
    paddingTop: 10,
    borderRadius: 20,
    flexDirection: 'row',
    margin: 5,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    textTransform: 'capitalize',
  },
  textContainer: {
    paddingVertical: 10,
  },
  buttonContainer: {
    marginVertical: 5,
  },
  image: {
    width: 80,
    height: 80,
  },
  imageContainer: {
    alignSelf: 'flex-end',
  },
});
