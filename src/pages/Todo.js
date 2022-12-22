import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoCreateForm from '../components/todo/TodoCreateForm';
import TodoItem from '../components/todo/TodoItem';
import { useModelContext } from '../store/ModelContext';

const Todo = () => {
  const [todos, setTodos] = useState([]);
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
    <TodoWrpper>
      <h1>To-do List</h1>
      <TodoCreateForm setTodos={setTodos} />
      {todos ? (
        <>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} setTodos={setTodos} />
          ))}
        </>
      ) : (
        <p>작성된 todo가 없습니다.</p>
      )}
    </TodoWrpper>
  );
};

const TodoWrpper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export default Todo;
