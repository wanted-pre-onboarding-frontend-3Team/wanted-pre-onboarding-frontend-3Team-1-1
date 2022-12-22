import { useCallback, useContext } from 'react';
import styled from 'styled-components';
import { useModelContext } from '../../store/ModelContext';
import { TodoContext } from '../../store/TodoContext';
import Button from '../Button';
import TodoCompleteBtn from './TodoCompleteBtn';

const TodoItem = (prop) => {
  const { id, todo } = prop;
  const { todolist, isSuccess } = useModelContext();
  const { setTodos } = useContext(TodoContext);

  const deleteTodo = useCallback(async () => {
    const response = await todolist.deleteTodo(id);

    if (isSuccess(response)) {
      setTodos((prev) => prev.filter((el) => el.id !== id));
    }
  }, [id, todolist, isSuccess, setTodos]);

  return (
    <TodoItemBlock>
      <TodoCompleteBtn {...prop} />
      {todo}
      <Button onClick={deleteTodo}>삭제</Button>
    </TodoItemBlock>
  );
};

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
`;

export default TodoItem;
