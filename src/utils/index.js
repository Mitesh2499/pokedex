import {Dimensions} from 'react-native';
const URL = 'http://pokeapi.co/api/v2/pokemon';
const Poke_Image_URL = 'https://pokeres.bastionbot.org/images/pokemon';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export {width, height, URL, Poke_Image_URL};
