import React from 'react';
import TodoForm from './TodoForm';
import {useState} from 'react';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default TodoList;
