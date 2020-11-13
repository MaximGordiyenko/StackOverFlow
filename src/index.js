import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./store";

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root')
);

