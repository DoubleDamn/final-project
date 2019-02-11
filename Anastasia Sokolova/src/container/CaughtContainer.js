import CaughtPokemons from '../components/CaughtPokemons';
import { connect } from 'react-redux';
import { getAllCaught, getCaughtLength } from '../actions/actionCatch';


const mapStateToProps = state => {
  return {
    isLoading: state.caughtReducer.isLoading,
    pokemons: state.caughtReducer.pokemons,
    page: state.caughtReducer.page,
    loadNoMore: state.caughtReducer.loadNoMore,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCaught: (page) => dispatch(getAllCaught(page)),
    getLength: () => dispatch(getCaughtLength())
  };
};

const CaughtContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CaughtPokemons);
export { CaughtContainer };
