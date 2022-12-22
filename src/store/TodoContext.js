import { createContext, useContext, useMemo, useState } from 'react';

export const todoContext = createContext();

export const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const actions = useMemo(() => {
    return {
      todos,
      setTodos,
      addTodo: (todo) => {
        setTodos((prev) => [...prev, todo]);
      },
      deleteTodo: (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      },
      updateTodo: (updatedTodo) => {
        setTodos((prev) => prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
      },
    };
  }, [todos]);

  return <todoContext.Provider value={actions}>{children}</todoContext.Provider>;
};

export const useTodoContext = () => {
  const c = useContext(todoContext);

  return c;
};
