import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import user from './user/reducer';
import repositories from './repositories/reducer';

const rootReducer = combineReducers({
  user,
  repositories
});

const middleware = [thunk];

export default () => createStore (rootReducer, compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
