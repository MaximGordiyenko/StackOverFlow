import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

render(
  <Provider store={store}>
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
      <App/>
      </QueryParamProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

