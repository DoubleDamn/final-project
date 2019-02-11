import axios from 'axios'

export const getPokemon = (id) => {
    return axios
            .get(`http://localhost:3000/pokemons/${id}?_embed=caught`, {
                headers: {'Content-Type' : 'application/json'}
            })
            .then(res => {
                return res.data;
            });
}

export const actionPost = {
    POST_IS_LOADING: 'POST_IS_LOADING',
    POST_HAS_ERROR: 'POST_HAS_ERROR',
    POST_LOADING_SUCCESS: 'POST_LOADING_SUCCESS',
}

export const postHasError = (error) => {
    return {
        type: actionPost.POST_HAS_ERROR,
        error: error,
    };
}

export const postIsLoading = (bool) => {
    return {
        type: actionPost.POST_IS_LOADING,
        isLoading: bool
    };
}

export const postLoadingSuccess = (pokemon) => {
    return {
        type: actionPost.POST_LOADING_SUCCESS,
        pokemon
    };
}

//get info for one poke
export const getPoke = (poke) => {
    return (dispatch) => {
        dispatch(postIsLoading(true));
        getPokemon(poke)
            .then(poke => {
                dispatch(postLoadingSuccess(poke));
            })
            .catch((err) => {
                dispatch(postHasError(true));
            });
    };
}