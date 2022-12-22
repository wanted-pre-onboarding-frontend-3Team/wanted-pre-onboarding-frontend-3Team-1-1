import Label from '../components/Label';
import styled from 'styled-components';
import TodoCreate from '../components/todo/TodoCreate';
import TodoList from '../components/todo/TodoList';
import Button from '../components/Button';
import { useCallback, useState } from 'react';
import { useModelContext } from '../store/ModelContext';
import { useMount } from '../hooks/useMount';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const navigate = useNavigate();
  const { todoModel, isSuccess, isError } = useModelContext();
  const [todoList, setTodoList] = useState();

  const getTodoList = useCallback(async () => {
    const response = await todoModel.getTodo();

    if (isSuccess(response)) {
      setTodoList(
        response.data.sort((a, b) => b.id - a.id).sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted)),
      );
    } else if (isError(response)) {
      //
    }
  }, [isError, isSuccess, todoModel]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    navigate('/');
  }, [navigate]);

  useMount(() => {
    getTodoList();
  });

  return (
    <Wrapper>
      <Label>To Do List</Label>
      <TodoCreate setTodoList={setTodoList} />
      <TodoList setTodoList={setTodoList} todoList={todoList} />
      <Button color="white" onClick={handleLogout}>
        로그아웃
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export default Todo;
