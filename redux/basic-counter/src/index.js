import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    console.log('reducer', state, action);
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
}

const store = createStore(reducer);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });

const App = () => (
    <Provider store={store}>
        <Counter/>
    </Provider>
);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
