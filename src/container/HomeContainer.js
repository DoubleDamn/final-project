import Home from '../components/Home';
import { connect } from 'react-redux';
import { getAll, getLength } from '../actions/action';
import {catched} from '../actions/actionBtn'

const mapStateToProps = state => {
  return {
    isLoading: state.pokemonReducer.isLoading,
    pokemons: state.pokemonReducer.pokemons,
    page: state.pokemonReducer.page,
    loadNoMore: state.pokemonReducer.loadNoMore,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLength: () => dispatch(getLength()),
    catched:(poke) => dispatch(catched(poke)),
    getAll: (page) => dispatch(getAll(page)),
  } 
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
export { HomeContainer };
