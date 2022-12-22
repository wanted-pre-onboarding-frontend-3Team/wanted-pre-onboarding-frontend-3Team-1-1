import { createContext, useContext, useMemo, useState } from 'react';
import { useMount } from '../hooks/useMount';
import { useModelContext } from './ModelContext';

const TodoStateContext = createContext();
const TodoUpdaterContext = createContext();

export const TodoContext = (props) => {
  const { children } = props;

  const { todoModel, isSuccess, isError } = useModelContext();

  const [todos, setTodos] = useState([]);

  const actions = useMemo(() => {
    return {
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

  useMount(async () => {
    const response = await todoModel.getTodos();

    if (isSuccess(response)) {
      setTodos(response.data);
    } else if (isError(response)) {
      alert(response.data.message);
    }
  });

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
