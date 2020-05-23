import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item.js';

export default class TodosList extends React.Component {

    renderItems() {
        const todos = this.props.todos;
        var todosListItems= todos.map((todo, index ) =>
          <TodosListItem task = {todo.task} isCompleted = {todo.isCompleted}
            key = {index} toggleTask = {this.props.toggleTask}
              saveTask = {this.props.saveTask}
                deleteTask = {this.props.deleteTask}/>
        );
        //console.log("todosListItems is: ", todosListItems);
        return todosListItems;
  }

  render() {
    //console.log("this.props for todos-list: ",   this.props);
    return (
      <table>
        <TodosListHeader/>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
