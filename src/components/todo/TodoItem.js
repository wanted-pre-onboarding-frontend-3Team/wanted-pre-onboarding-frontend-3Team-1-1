import { useContext, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import TodoContext from '../../store/todo/todoContext';
import TodoButton from '../UI/todo/TodoButton';

const TodoItem = ({ todoInfo }) => {
  const [editMode, setEditMode] = useState(false);
  const todoCtx = useContext(TodoContext);

  const editInputRef = useRef(null);

  useEffect(() => {
    if (editMode) editInputRef.current.focus();
  }, [editMode]);

  const completedHandler = () => todoCtx.completedTodo(todoInfo.id, !todoInfo.isCompleted, todoInfo.todo);
  const deleteHandler = () => todoCtx.deleteTodo(todoInfo.id);
  const editModeHandler = () => setEditMode(true);
  const cancelHandler = () => setEditMode(false);

  const editHandler = () => {
    setEditMode(false);
    todoCtx.changedTodo(todoInfo.id, todoInfo.isCompleted, editInputRef.current.value);
  };

  return (
    <TodoItemWrapper>
      {!editMode && (
        <TodoContent completed={todoInfo.isCompleted} onClick={completedHandler}>
          {todoInfo.todo}
        </TodoContent>
      )}
      {editMode && <EditInput type="text" defaultValue={todoInfo.todo} ref={editInputRef} />}
      <ButtonWrapper>
        <TodoButton btnName={editMode ? '완료' : '수정'} onClick={editMode ? editHandler : editModeHandler}>
          {editMode ? '완료' : '수정'}
        </TodoButton>
        <TodoButton btnName={editMode ? '취소' : '삭제'} onClick={editMode ? cancelHandler : deleteHandler}>
          {editMode ? '취소' : '삭제'}
        </TodoButton>
      </ButtonWrapper>
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.li`
  display: flex;
  gap: 8px;
  height: 58px;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
`;

const TodoContent = styled.p`
  font-size: 18px;

  ${({ completed }) =>
    completed &&
    css`
      text-decoration: line-through;
    `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const EditInput = styled.input`
  width: 100%;
  background-color: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  line-height: 18px;
  padding: 0 14px;

  &:focus {
    border: 1px solid #0085ff;
    box-shadow: 0 0 2px 2px rgb(0 133 255 / 15%);
  }
`;

export default TodoItem;
