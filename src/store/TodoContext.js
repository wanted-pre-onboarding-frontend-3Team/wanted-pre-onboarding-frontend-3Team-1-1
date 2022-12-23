import { createContext, useContext, useMemo, useState } from 'react';

const TodoStateContext = createContext();
const TodoUpdaterContext = createContext();

export const TodoContext = (props) => {
  const { children } = props;

  const [todos, setTodos] = useState([]);

  const actions = useMemo(() => {
    return {
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
  }, []);

  return (
    <TodoStateContext.Provider value={todos}>
      <TodoUpdaterContext.Provider value={actions}>{children}</TodoUpdaterContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const c = useContext(TodoStateContext);

  return c;
};

export const useTodoUpdater = () => {
  const c = useContext(TodoUpdaterContext);

  return c;
};
