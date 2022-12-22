import { useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { useModelContext } from '../../store/ModelContext';
import TodoUpdate from './TodoUpdate';

const TodoItem = ({ todo, setTodoList }) => {
  const { todoModel, isSuccess, isError } = useModelContext();
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  const [newTodo, setNewTodo] = useState(todo.todo);
  const [isEditing, setIsEditing] = useState(false);

  const handleCheck = useCallback(async () => {
    const response = await todoModel.updateTodo({ todo: todo.todo, isCompleted: !todo.isCompleted }, todo.id);

    if (isSuccess(response)) {
      setIsChecked(!isChecked);
    } else if (isError(response)) {
      //
    }
  }, [isChecked, isError, isSuccess, todoModel, todo]);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = useCallback(async () => {
    const response = await todoModel.deleteTodo(todo.id);

    if (isSuccess(response)) {
      setTodoList((prev) => {
        return prev.filter((el) => el.id !== todo.id);
      });
    } else if (isError(response)) {
      //
    }
  }, [todo, isError, isSuccess, setTodoList, todoModel]);

  return (
    <List>
      {isEditing ? (
        <TodoUpdate todo={todo} setIsEditing={setIsEditing} setNewTodo={setNewTodo} />
      ) : (
        <>
          <TodoContainer>
            <CheckBox type="checkbox" checked={isChecked} onChange={handleCheck} />
            <Todo>{newTodo}</Todo>
          </TodoContainer>
          <ButtonContainer>
            <Button onClick={handleEdit} color="white">
              수정
            </Button>
            <Button color="red" onClick={handleDelete}>
              삭제
            </Button>
          </ButtonContainer>
        </>
      )}
    </List>
  );
};

const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 12px 0;
`;

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 4px;
`;

const CheckBox = styled.input`
  -webkit-appearance: checkbox;
  min-width: 16px;
  height: 16px;
`;

const Todo = styled.div`
  margin: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export default TodoItem;
