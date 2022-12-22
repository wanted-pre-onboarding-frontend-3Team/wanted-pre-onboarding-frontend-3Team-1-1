import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import TodoCreateForm from '../components/todo/TodoCreateForm';
import TodoItem from '../components/todo/TodoItem';
import { useModelContext } from '../store/ModelContext';
import { TodoContext } from '../store/TodoContext';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const todoProviderValue = useMemo(() => ({ setTodos }), [setTodos]);

  const { todolist, isSuccess } = useModelContext();

  useEffect(() => {
    const getTodos = async () => {
      const response = await todolist.getTodos();

      if (isSuccess(response)) {
        setTodos(response.data);
      }
    };

    getTodos();
  }, [todolist, isSuccess]);

  return (
    <TodoContext.Provider value={todoProviderValue}>
      <TodoWrpper>
        <h1>To-do List</h1>
        <TodoCreateForm />
        {todos ? (
          <>
            {todos.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </>
        ) : (
          <p>작성된 todo가 없습니다.</p>
        )}
      </TodoWrpper>
    </TodoContext.Provider>
  );
};

const TodoWrpper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Todo;
