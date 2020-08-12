import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

import { createStore } from 'redux';

const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    console.log('reducer', state, action);
    return state;
}

const store = createStore(reducer);


const App = () => (
    <div>
        <Counter/>
    </div>
);


ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);
