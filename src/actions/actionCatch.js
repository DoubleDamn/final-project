import axios from 'axios';

export const getLength = () => {
  return axios
    .get(`http://localhost:3000/caught`, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      return res.data.length;
    });
};

export const getCaught = page => {
  const limit = 10
  return axios
    .get(`http://localhost:3000/caught?_page=${page}&_limit=${limit}&_sort=id&_order=desc`, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

//action types
export const actionCatch = {
  DATA_CAUGHT_IS_LOADING: 'DATA_CAUGHT_IS_LOADING',
  DATA_CAUGHT_HAS_ERROR: 'DATA_CAUGHT_HAS_ERROR',
  DATA_CAUGHT_LOADED: 'DATA_CAUGHT_LOADED',
  ADD_CAUGHT_PAGE: 'ADD_CAUGHT_PAGE',
  CAUGHT_LENGTH: 'CAUGHT_LENGTH'
};

//Loaders
export const dataCaughtHasError = error => {
  return {
    type: actionCatch.DATA_CAUGHT_HAS_ERROR,
    error: error
  };
};
export const dataCaughtIsLoading = bool => {
  return {
    type: actionCatch.DATA_CAUGHT_IS_LOADING,
    isLoading: bool
  };
};
export const dataCaughtLoaded = pokemons => {
  return {
    type: actionCatch.DATA_CAUGHT_LOADED,
    pokemons
  };
};
export const addCaughtPage = (num = 1) => {
  return {
    type: actionCatch.ADD_CAUGHT_PAGE,
    page: num
  };
};

export const CaughtLength = size => {
  return {
    type: actionCatch.CAUGHT_LENGTH,
    size
  };
};

export const getCaughtLength = () => {
  return dispatch => {
    getLength().then(size => {
      dispatch(CaughtLength(size));
    });
  };
};



export const getAllCaught = pages => {
  return dispatch => {
    dispatch(dataCaughtIsLoading(true));
    getCaught(pages)
      .then(pokemons => {
        dispatch(dataCaughtLoaded(pokemons));
        dispatch(addCaughtPage(pages + 1));
      })
      .catch(error => {
        dispatch(dataCaughtHasError(error));
      });
  };
};
