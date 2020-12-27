import React, { Component } from 'react';

export default class TodoItem extends Component {
    render() {
        const { deleteTodo, todo } = this.props;
        return (
            <div className="TodoItem" data-testid="TodoItem">
                <div data-testid="TodoItem-priority" className={`TodoItem-priority TodoItem--${todo.priority}`} />
                <div data-testid="TodoItem-text" className={`TodoItem-text`}>
                    {todo.text}
                </div>
                <button onClick={() => deleteTodo(todo)} className="TodoItem-delete">
                    -
                </button>
            </div>
        );
    }
}
