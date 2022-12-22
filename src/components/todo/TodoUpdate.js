import styled from 'styled-components';
import { useCallback } from 'react';
import { useModelContext } from '../../store/ModelContext';
import useForm from '../../hooks/useForm';
import Input from '../Input';
import Button from '../Button';

const TodoUpdate = ({ setIsEditing, todo, setNewTodo }) => {
  const { todoModel, isSuccess, isError } = useModelContext();
  const { register, form, validation } = useForm({ todo: todo.todo, isCompleted: todo.isCompleted });

  const handleUpdate = useCallback(
    async (e) => {
      e.preventDefault();
      const response = await todoModel.updateTodo(form, todo.id);

      if (isSuccess(response)) {
        setNewTodo(form.todo);
      } else if (isError(response)) {
        //
      }
      setIsEditing(false);
    },
    [form, isError, isSuccess, setIsEditing, setNewTodo, todo.id, todoModel],
  );

  const handleCancel = useCallback(() => {
    setIsEditing(false);
  }, [setIsEditing]);

  return (
    <>
      <StyledForm onSubmit={handleUpdate}>
        <Input type="text" title="투두" required value={form.todo} {...register('todo')} />
        <Button disabled={!validation}>완료</Button>
      </StyledForm>
      <Button onClick={handleCancel} color="red">
        취소
      </Button>
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
  margin-right: 8px;
`;
export default TodoUpdate;
