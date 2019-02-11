import { getLength } from './actionCatch';
import axios from 'axios';

export const catchPokemon = pokemon => {
  getLength().then(len => {
    return axios
      .post(`http://localhost:3000/caught`,
        {
          id: len+1,
          name: pokemon.name,
          date: new Date().toLocaleDateString(),
          pokemonId: pokemon.id,
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(res => {
        return res.data;
      });
  });
};
export const typeBtn = {
  UPDATE_BTN: 'UPDATE_BTN'
};

export const updateBtn = (bool = false) => {
  return {
    type: typeBtn.UPDATE_BTN,
    caught: bool
  };
};

export const catched = poke => {
  return dispatch => {
    dispatch(updateBtn(true));
    catchPokemon(poke);
    dispatch(updateBtn(false));       

  };
};
