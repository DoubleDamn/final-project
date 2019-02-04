import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer/reducer'
import App from './App';
import './style.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
    <App />;
  </Provider>,
  </HashRouter>,
  document.getElementById('root')
);

module.hot.accept();
