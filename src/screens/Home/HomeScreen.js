import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, StatusBar} from 'react-native';
import colors from '../../assets/colors';

import {Card} from '../../components/organisms';
import {getAllPokemons} from '../../Logic';
import {Poke_Image_URL} from '../../utils';

const HomeScreen = ({navigation}) => {
  const a = [1, 2, 3, 4];
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState('');
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const result = await getAllPokemons();

      setData(result);
      console.log(result);
      setLoading(false);
    };
    getData();
  }, []);
  if (loading) {
    return <Text>Loading</Text>;
  }
  return (
    <>
      <StatusBar backgroundColor="#fff" />
      <View style={{margin: 10}}>
        <View
          style={{
            margin: 10,
            marginVertical: 15,
            paddingVertical: 5,
            borderBottomColor: '#000',
            borderBottomWidth: 2,
            alignSelf: 'flex-start',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Pokedex</Text>
        </View>
        <FlatList
          numColumns={2}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            const type = item.types[0].type.name;
            const backgroundColor = colors[type];
            const pokemon_img = `${Poke_Image_URL}/${item.id}.png`;
            return (
              <View>
                <Card
                  name={item.name}
                  imageURL={pokemon_img}
                  types={item.types}
                  backgroundColor={backgroundColor}
                  onPress={() =>
                    navigation.navigate('Detail', {
                      data: item,
                      backgroundColor: backgroundColor,
                      pokemon_img: pokemon_img,
                    })
                  }
                />
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
