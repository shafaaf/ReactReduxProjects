import { createStore, compse } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';

// Modify this and feed to router in reduxtagram
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

// Fake data to work with
import comments from './data/comments';
import posts from './data/posts';

// Create an object for the fake data
const defaultState = {
  posts,	//same as posts: posts
  comments
};

/* You may optionally specify the initial state as the 
second argument to createStore(). 
This is useful for hydrating the state of the client 
to match the state of a Redux application 
running on the server. */
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
