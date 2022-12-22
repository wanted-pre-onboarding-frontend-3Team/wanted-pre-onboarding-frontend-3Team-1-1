import React from 'react';

const TodoContext = React.createContext({
  todoList: [],
  fetchTodo: () => [],
  addTodo: (newTodo) => {},
  deleteTodo: (id) => {},
  completedTodo: (id, completed, todo) => {},
  changedTodo: (id, completed, todo) => {},
});

export default TodoContext;
