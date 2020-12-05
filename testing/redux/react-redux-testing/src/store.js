import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer';
import promiseMiddleware from 'redux-promise-middleware';

export default function configureStore() {
 return createStore(
  rootReducer,
     compose(applyMiddleware(thunk, logger, promiseMiddleware()),
         window.devToolsExtension ? window.devToolsExtension() : f => f)
 );
}
