import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as bookActions from './actions/bookActions';


import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';


import configureStore from './store/configureStore';

const store = configureStore();
// store.dispatch(bookActions.fetchBooks());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
