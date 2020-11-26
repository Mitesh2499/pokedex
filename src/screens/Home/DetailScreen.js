import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import colors from '../../assets/colors';
import {height, width} from '../../utils';
import {Button} from '../../components/atoms';

const DetailScreen = ({route, navigation}) => {
  const {data, backgroundColor, pokemon_img} = route.params;
  const getNumber = (number) => {
    const digits = `${number}`.length;
    let numberString = '#';
    for (var i = 3; i > digits; i--) {
      numberString += '0';
    }
    numberString += number;
    return numberString;
  };
  return (
    <>
      <StatusBar backgroundColor={backgroundColor} />
      <View style={[styles.detail, {backgroundColor: backgroundColor}]}>
        <View style={styles.navigation}>
          <MaterialIcons.Button
            underlayColor="transparent"
            backgroundColor="transparent"
            name="arrow-back"
            color={colors.white}
            size={24}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.detailImageContainer}>
          <View style={styles.header}>
            <View>
              <Text style={styles.name}>{data.name}</Text>
              <View style={styles.buttonContainer}>
                {data?.types.map((item) => (
                  <Button title={item.type.name} style={{marginRight: 10}} />
                ))}
              </View>
            </View>
            <View>
              <Text style={styles.number}>{getNumber(data.id)}</Text>
            </View>
          </View>

          <View style={styles.imageContainer}>
            <Image source={{uri: pokemon_img}} style={styles.image} />
          </View>
        </View>
        <View style={styles.detailContainer}></View>
      </View>
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  navigation: {
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  detail: {
    height: '100%',
    width: width,
  },
  detailImageContainer: {
    height: height / 2.5,
    width: '100%',
    paddingHorizontal: 20,
  },

  detailContainer: {
    height: height / 1.5,
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 2,
  },
  name: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  imageContainer: {
    width: '100%',
    height: height / 3 - 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
});
