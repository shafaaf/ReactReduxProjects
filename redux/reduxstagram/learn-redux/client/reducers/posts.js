// each reducer for each state
// post, cmments,

// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state


// To make it pure, take a copy and return a new state.
// Dont mutate an external state
function posts(state = [], action) {
	console.log("==posts reducer: called.");
	console.log("posts state is: ", state);
	console.log("posts action is: ", action);
	switch (action.type){
		case 'INCREMENT_LIKES' : 
			// return the updated state
			console.log("Incrementing likes for posts reducer");
			const i = action.index;
			return [
				...state.slice(0, i), 	//before the one we are updating
				{... state[i], likes: state[i].likes + 1 },
				...state.slice(i+1), 	//after the one we are updating	
			];
		default:
			return state;
	}
}

export default posts;
