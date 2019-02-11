import { actionCatch } from '../actions/actionCatch';
import {typeBtn} from '../actions/actionBtn';

const initState = {
  isLoading: false,
  error: false,
  pokemons: [],
  page: 1,
  loadNoMore: false
};

const caughtReducer = (state = initState, action) => {
  switch (action.type) {
    case actionCatch.DATA_CAUGHT_IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case actionCatch.DATA_CAUGHT_HAS_ERROR:
      return {
        error: true,
        isLoading: false
      };
    case actionCatch.CAUGHT_LENGTH:
      return {
        ...state,
        size: action.size
      };
    case actionCatch.DATA_CAUGHT_LOADED:
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.pokemons],
        isLoading: false,
        loadNoMore: state.pokemons.length + action.pokemons.length !== state.size ? false : true
      }
   
    case actionCatch.ADD_CAUGHT_PAGE:
      return {
        ...state,
        page: action.page
      };
    case typeBtn.UPDATE_BTN:
       return initState;

    default:
      return state;
  }
};

export default caughtReducer;
