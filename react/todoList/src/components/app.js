// this.setState always re renders the page at the end

// pass states using props and if they change call
// this.prop.propName to call the parent component's
// function which changes state. This parent component
// should be the one that declares the state.

// play with "this" keyword in toggleTask. The toggle task in todos-list-item
// also has a this binded to pass the task
// If remove the "this" in this file, this refers to TodosListItem

import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';

const todos = [
	{
		task: 'make react tutorial',
		isCompleted: false
	},
	{
		task: 'eat dinner',
		isCompleted: true
	},
];

export default class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			todos: todos
		}
	}

	// Called when new task submitted in form
	createTask(task) {
		// console.log("createTask with task: ", task);
		// console.log("this is: ", this);
		this.state.todos.push({
			task: task,
			isCompleted: false
		});
		this.setState({
			todos: this.state.todos
		});
	}

	// Called when a task is clicked on
	toggleTask(task) {
		console.log("At toggleTask. Task is: ", task);
		console.log("This is: ", this);
		const todos = this.state.todos;
		const todosLength = todos.length;
		for (let i = 0; i < todosLength; i++) {
			if (todos[i]["task"] === task){
				const isCompleted = todos[i]["isCompleted"];
				todos[i]["isCompleted"] = !isCompleted;
				break;
			}
		}
		this.setState({ todos: this.state.todos});
	}

	// rename a task
	saveTask(oldTask, newTask) {
		const todos = this.state.todos;
		const todosLength = todos.length;
		for (let i = 0; i < todosLength; i++) {
			if (todos[i]["task"] === oldTask) {
				todos[i]["task"] = newTask;
				break;
			}
		}
		this.setState({ todos: this.state.todos});
	}

	deleteTask(taskToDelete) {
		const todos = this.state.todos;
		const todosLength = todos.length;
		for (let i = 0; i < todosLength; i++) {
			if (todos[i]["task"] === taskToDelete){
				todos.splice(i,1);
				break;
			}
		}
		this.setState({ todos: this.state.todos});
	}

	render() {
		return (
			<div>
				<h1>React todo app</h1>
				<CreateTodo todos = {this.state.todos} createTask = {this.createTask.bind(this)}/>
				<TodosList
					todos = {this.state.todos}
					toggleTask = {this.toggleTask.bind(this)}
					saveTask = {this.saveTask.bind(this)}
					deleteTask = {this.deleteTask.bind(this)}/>
			</div>
		);
	}
}
