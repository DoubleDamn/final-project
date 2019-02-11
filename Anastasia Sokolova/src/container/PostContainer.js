import Post from '../components/Post';
import { connect } from 'react-redux';
import { getPoke } from '../actions/actionPost';

const mapStateToProps = (state) => ({
    isLoading: state.postReducer.isLoading,
    error: state.postReducer.error,
    pokemon: state.postReducer.pokemon,
});

const mapDispatchToProps = (dispatch) => {
    return {
        getPoke: (poke) => dispatch(getPoke(poke))
    };
};

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);
export {PostContainer};