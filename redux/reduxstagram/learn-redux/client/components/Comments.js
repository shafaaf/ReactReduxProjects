import React from 'react';

const Comments = React.createClass({
  handleSubmit(e){
    e.preventDefault(); //Prevent refresh due to submit
    console.log("Submitting form.");
    // Use refs to get text
    // Generally in react do not reference DOM elements
    // If need, use ref
    console.log(this.refs);
    const { postId } = this.props.params;
    const  author = this.refs.author.value;
    const  comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },
  renderComment(comment, i){
		console.log("renderComment- comment is: ", comment);
		return(
			<div className="comment" key={i}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button 
            className="remove-comment" 
            onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>
            &times;
          </button>
				</p>
			</div>
		);
	},
	render() {
    return (
    	<div className="comments">
    		{this.props.postComments.map(this.renderComment)}
        <form 
          ref="commentForm" 
          className="comment-form"
          onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden/>
        </form>
    	</div>
    );
	}
});

export default Comments;
