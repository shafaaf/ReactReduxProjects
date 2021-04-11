// Bind this used so that 'this' object can be used
// within the method

// See how CSS colors styles are applied

// Need to change state for tasks when clicked and
// so need a prop which modifies state of previous component

import React from 'react';

export default class  TodosListItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isEditing: false
		};
	}

	// Change editing state to true on edit click
	onEditClick() {
		console.log("Editing");
		this.setState ({
			isEditing: true
		});
	}

	// Change cancel state to false on canel click
	onCancelClick(){
		console.log("Cancelling");
		this.setState ({
			isEditing: false
		});
	}

	onSaveClick(event){
		event.preventDefault();
		var oldTask = this.props.task;
		var newTask = this.refs.editInput.value;
		console.log("onSaveClick: oldTask is: ", oldTask);
		console.log("onSaveClick: newTask is: ", newTask);
		this.props.saveTask(oldTask, newTask);
		this.setState({isEditing: false});
	}

	renderTaskSection() {
		//console.log("this.props is: ", this.props);
		const task = this.props.task;
		const isCompleted = this.props.isCompleted;
		const taskStyle = {
			color: isCompleted ? 'green': 'red',
			cursor: 'pointer'
		};

		if (this.state.isEditing) { // Editing so need input box
			return (
				<td>
					<form onSubmit = {this.onSaveClick.bind(this)}>
						<input type = "text" placeholder = {task}
							ref = "editInput"/>
					</form>
				</td>
			);
		}
		else { // Not editing so just return the task name
			return (
				<td style = {taskStyle} onClick = {this.props.toggleTask.bind(this, task)}>
					{task}
				</td>
			);
		}
	}

	renderActionSection() {
		if(this.state.isEditing) {
			return ( // Return buttons (save, cancel) when editing
				<td>
					<button onClick = {this.onSaveClick.bind(this)}>Save</button>
					<button onClick = {this.onCancelClick.bind(this)}>Cancel</button>
				</td>
			);
		}
		else { // Return default buttons (edit, delete) since editing
			return(
				<td>
					<button onClick = {this.onEditClick.bind(this)}>Edit</button>
					<button onClick = {this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
				</td>
			);
		}
	}

	render() {
		return (
			<tr>
				{this.renderTaskSection()}
				{this.renderActionSection()}
			</tr>
		);
	}
}
