import { actionType } from '../actions/action'

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
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.pokemons],
        isLoading: false,
        loadNoMore: ((state.pokemons.length + action.pokemons.length) !== state.size)  ? false : true
      }

    case actionType.ADD_PAGE:
      return {
        ...state,
        page: action.page
      };

    default:
      return state;
  }
};

export default pokemonReducer;
