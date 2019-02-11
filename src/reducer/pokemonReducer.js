import { actionType } from '../actions/action'
import {typeBtn} from '../actions/actionBtn';

const initState = {
  isLoading: false,
  error: false,
  pokemons: [],
  page: 1,
  loadNoMore: false,
};

const pokemonReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.DATA_IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case actionType.DATA_HAS_ERROR:
      return {
        error: true,
        isLoading: false
      };
      case actionType.ALL_LENGTH:
      return {
        ...state,
        size: action.size
      };
    case actionType.DATA_LOADED: 
    // if(state.pokemons.length !== 0) {
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.pokemons],
        isLoading: false,
        loadNoMore: ((state.pokemons.length + action.pokemons.length) !== state.size)  ? false : true
      }
    // } else {
    //     return {
    //         ...state, 
    //         pokemons: [...action.pokemons]
    //     }
    // }

    case actionType.ADD_PAGE:
      return {
        ...state,
        page: action.page
      };
      // case typeBtn.UPDATE_BTN:
      //  return {
      //    ...state,
      //    pokemons: action.pokemons.caught,
      //    caught: action.caught
      //  }
    default:
      return state;
  }
};

export default pokemonReducer;
