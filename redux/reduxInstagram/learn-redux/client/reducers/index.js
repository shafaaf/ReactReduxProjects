import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import other reducers
import posts from './posts';
import comments from './comments';

// 3 things that live in state
const rootReducer = combineReducers({
	posts, 
	comments, 
	routing: routerReducer 
});

export default rootReducer;
