import axios from 'axios';

//action types
export const actionType = {
  DATA_IS_LOADING: 'DATA_IS_LOADING',
  DATA_HAS_ERROR: 'DATA_HAS_ERROR',
  DATA_LOADED: 'DATA_LOADED',
  ADD_PAGE: 'ADD_PAGE',
  ALL_LENGTH: 'ALL_LENGTH'
};

//Loaders
export const dataHasError = error => {
  return {
    type: actionType.DATA_HAS_ERROR,
    error: error
  };
};
export const dataIsLoading = bool => {
  return {
    type: actionType.DATA_IS_LOADING,
    isLoading: bool
  };
};
export const dataLoaded = pokemons => {
  return {
    type: actionType.DATA_LOADED,
    pokemons
  };
};

export const addPage = (num = 1) => {
  return {
    type: actionType.ADD_PAGE,
    page: num
  };
};
//length all pokemon state
export const AllLength = size => {
  return {
    type: actionType.ALL_LENGTH,
    size
  };
};

export const getAllLength = () => {
  return axios
    .get(`http://localhost:3000/pokemons`, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      return res.data.length;
    });
};

export const getLength = () => {
  return dispatch => {
    getAllLength().then(size => {
      dispatch(AllLength(size));
    });
  };
};

//get data from server
export const getDate = page => {
  const limit = 30;
  return axios
    .get(`http://localhost:3000/pokemons/?_embed=caught&_page=${page}&_limit=${limit}`, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(resp => {
      return resp.data;
    })
    .catch(error => {
      return error;
    });
};

//get all pokemons for home page
export const getAll = pages => {
  return dispatch => {
    dispatch(dataIsLoading(true));
    getDate(pages)
      .then(pokemons => {
        dispatch(dataLoaded(pokemons));
        dispatch(addPage(pages + 1));
      })
      .catch(error => {
        dispatch(dataHasError(error));
      });
  };
};