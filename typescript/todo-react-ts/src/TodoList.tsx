import React from 'react';
import {TodoListItem} from "./TodoListItem";

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo}) => {
    return (
        <ul>
            {
                todos.map((todo, i) => {
                    return <TodoListItem
                        todo = {todo}
                        toggleTodo = {toggleTodo}
                        key = {i}
                    />;
                })
            }
        </ul>
    )
};
