import { useCallback, useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import { useModelContext } from '../../store/ModelContext';
import { TodoContext } from '../../store/TodoContext';
import Button from '../Button';
import TodoCompleteBtn from './TodoCompleteBtn';
import TodoEditForm from './TodoEditForm';

const TodoItem = (prop) => {
  const { id, isCompleted, todo } = prop;
  const { todolist, isSuccess } = useModelContext();
  const { setTodos } = useContext(TodoContext);
  const [onEdit, setOnEdit] = useState(false);

  const editToggle = () => {
    setOnEdit(!onEdit);
  };

  const deleteTodo = useCallback(async () => {
    const response = await todolist.deleteTodo(id);

    if (isSuccess(response)) {
      setTodos((prev) => prev.filter((el) => el.id !== id));
    }
  }, [id, todolist, isSuccess, setTodos]);

  return (
    <TodoItemBlock>
      <TodoCompleteBtn {...prop} />
      {onEdit ? (
        <TodoEditForm {...prop} onEdit={onEdit} setOnEdit={setOnEdit} />
      ) : (
        <>
          <TodoText isCompleted={isCompleted}>{todo}</TodoText>
          <Button onClick={editToggle}>수정</Button>
          <Button onClick={deleteTodo}>삭제</Button>
        </>
      )}
    </TodoItemBlock>
  );
};

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
`;

const TodoText = styled.div`
  flex: 1;
  margin: auto 10px;
  color: #555;
  ${(props) =>
    props.isCompleted &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

export default TodoItem;
