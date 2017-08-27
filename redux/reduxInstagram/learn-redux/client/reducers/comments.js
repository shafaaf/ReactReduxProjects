// Reducer edits states 
// listens for actions.

// each reducer for each state
// post, cmments,

// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

// Every reducer runs when an action occurs

// This takes in the comments state for that post and adds or deletes a post
function postComments (state = [], action) {
	console.log("==postComments reducer: called.");
	console.log("comments state is: ", state);
	console.log("comments action is: ", action);
	switch(action.type){
		case 'ADD_COMMENT':
			//Return existing state with the new comment
			return [ ...state, {
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			console.log("Removing a comment.");
			return [
				// From the start to the one we want to delete
				...state.slice(0, action.i),
				//After the deleted one to the end
				...state.slice(action.i+1)
			]
		default:
			return state;
			
	}
	return state;
}

// Takes in the all posts
function comments (state = [], action) {
	console.log("==comments reducer: called.");
	console.log("state is: ", state);
	console.log("action is: ", action);
	if(typeof action.postId !== 'undefined'){
		return {
			// Take current state
			... state,
			// Overwrite this post with a new one
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

export default comments;
