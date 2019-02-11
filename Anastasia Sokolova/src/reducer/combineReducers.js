import { combineReducers} from 'redux';
import pokemonReducer from './pokemonReducer'
import caughtReducer from './caughtReducer'
import postReducer from './postReducer'

export default combineReducers({
    pokemonReducer,
    caughtReducer,
    postReducer
});