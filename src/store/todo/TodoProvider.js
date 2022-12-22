import { useCallback, useMemo, useReducer, useRef } from 'react';
import useHttp from '../../hooks/useHttp';
import TodoContext from './todoContext';

const defaultTodoState = {
  todoList: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH':
      return {
        todoList: action.fetchTodo || state.todoList,
      };

    case 'ADD':
      return {
        todoList: [...state.todoList, action.newTodo],
      };

    case 'DELETE':
      return {
        todoList: state.todoList.filter((todo) => todo.id !== action.id),
      };

    case 'COMPLETE':
      return {
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
        ),
      };

    case 'UPDATE':
      return {
        todoList: state.todoList.map((todo) => (todo.id === action.id ? action.newTodo : todo)),
      };

    default:
      return defaultTodoState;
  }
};

const TodoProvider = ({ children }) => {
  const [todoState, dispatchTodoAction] = useReducer(todoReducer, defaultTodoState);

  const todoRef = useRef();
  const todoListRef = useRef();

  const { sendRequest } = useHttp();
  const { todoList } = todoState;

  const fetchTodoHandler = useCallback(async () => {
    const fetchTodo = (data) => {
      todoListRef.current = data;
    };

    await sendRequest(
      {
        url: '/todos',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
      fetchTodo,
    );

    dispatchTodoAction({ type: 'FETCH', fetchTodo: todoListRef.current });
  }, [sendRequest]);

  const addTodoHandler = useCallback(
    async (newTodo) => {
      if (!newTodo.trim().length) return;

      const addTodo = (data) => {
        todoRef.current = data;
      };

      await sendRequest(
        {
          url: '/todos',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
          body: {
            todo: newTodo,
          },
        },
        addTodo,
      );
      dispatchTodoAction({ type: 'ADD', newTodo: todoRef.current });
    },
    [sendRequest],
  );

  const deleteTodoHandler = useCallback(
    async (id) => {
      const deleteTodo = () => {};

      await sendRequest(
        {
          url: `/todos/${id}`,
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
        deleteTodo,
      );
      dispatchTodoAction({ type: 'DELETE', id });
    },
    [sendRequest],
  );

  const completedTodoHandler = useCallback(
    async (id, completed, todo) => {
      const completedTodo = (todo) => {
        todoListRef.current = todo;
      };

      await sendRequest(
        {
          url: `/todos/${id}`,
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
          body: {
            todo,
            isCompleted: completed,
          },
        },
        completedTodo,
      );
      dispatchTodoAction({ type: 'COMPLETE', id });
    },
    [sendRequest],
  );

  const changeTodoHandler = useCallback(
    async (id, completed, todo) => {
      if (!todo?.trim().length) return;

      const changeTodo = (todo) => {
        todoRef.current = todo;
      };

      await sendRequest(
        {
          url: `/todos/${id}`,
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
          body: {
            todo,
            isCompleted: completed,
          },
        },
        changeTodo,
      );
      dispatchTodoAction({ type: 'UPDATE', id, newTodo: todoRef.current });
    },
    [sendRequest],
  );

  const todoContext = useMemo(
    () => ({
      todoList,
      fetchTodo: fetchTodoHandler,
      addTodo: addTodoHandler,
      deleteTodo: deleteTodoHandler,
      completedTodo: completedTodoHandler,
      changedTodo: changeTodoHandler,
    }),
    [todoList, addTodoHandler, changeTodoHandler, completedTodoHandler, deleteTodoHandler, fetchTodoHandler],
  );

  return <TodoContext.Provider value={todoContext}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
