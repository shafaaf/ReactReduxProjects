type Todo = {
    text: String,
    complete: boolean
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: String) => void;
