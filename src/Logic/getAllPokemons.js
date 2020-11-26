import axios from 'axios';
import {URL} from '../utils';
const TOTAL_POKEMON = 20;
const SET_OF = 20;
const getAllPokemons = async () => {
  let start = 1;
  // let end = SET_OF;
  let all_pokemons = [];
  for (var i = start; i <= TOTAL_POKEMON; i++) {
    const result = await axios
      .get(`${URL}/${i}`)
      .then((result) => {
        return result.data;
      })
      .catch((error) => console.log(error));
    console.log(i);
    console.log(result);
    all_pokemons.push(result);
  }
  // start = end;
  // if (end !== TOTAL_POKEMON) end = end + SET_OF return;

  return all_pokemons;
};

export default getAllPokemons;
