//refs used to access specific react DOM elements

import React from 'react';

export default class CreateTodo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null
    }; 
  } 

  render() {
  	return (
  		<form onSubmit = {this.handleCreate.bind(this)}>
  			<input type = "text" placeholder = "Task I want to add .." ref = "createInput"/>
  			<button>Create</button>
        {this.renderError()}
  		</form>
    );
  }

  // For printing error messages
  renderError(){
    if(!this.state.error){
      return null;
    }
    else{
      return <div style = {{color:'red'}}>{this.state.error}</div>;
    }
  }

  // Called when form to create task is submitted
  handleCreate(event){ 
  	event.preventDefault();
  	console.log("At handle    Create: ", event.target);
  	var task =  this.refs.createInput.value;
  	console.log("At handleCreate: ", task);
  	
    var validateInput = this.validateInput(task);
    if(validateInput){  // task invalid
      this.setState({
        error: validateInput
      });
      return;
    }
    // Task is valid
    this.setState({ 
      error: null
    });
    this.props.createTask(task);
  	this.refs.createInput.value = '';	//empty after every empty
  }


  // Checks if task submitted is valid or not
  validateInput(task){
    if(!task){
      return "Please enter a task name.";
    }
    //Checks if task already exists or not
    var todos = this.props.todos;
    var todosLength = todos.length;
    console.log("todosLength is: ", todosLength);
    for(var i = 0;i<todosLength;i++){
      if(todos[i]["task"] == task){
        return "Duplicate task. Please enter again.";
      }
    }
    return null;
  }

}