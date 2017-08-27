// Everytime run an action or dispatch an action, every reducer runs

// Increment likes
export function increment(index) {	// index tells is which post
  console.log("actionCreators: Dispatching increment with index: ", index);
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// Add a comment
export function addComment(postId, author, comment) {
  console.log("actionCreators: Dispatching addComment.");
  console.log("actionCreators: postId is: ", postId);
  console.log("actionCreators: author is: ", author);
  console.log("actionCreators: comment is: ", comment);
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// Remove comment
export function removeComment(postId, i) {
  console.log("actionCreators: Called removeComment.");
  console.log("actionCreators: postId is: ", postId);
  console.log("actionCreators: i is: ", i);
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}

// Also changing page is an action
