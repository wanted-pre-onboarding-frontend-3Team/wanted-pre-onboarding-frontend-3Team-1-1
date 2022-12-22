import { useCallback } from 'react';
import styled from 'styled-components';
import useForm from '../../hooks/useForm';
import { useModelContext } from '../../store/ModelContext';
import { useTodoUpdater } from '../../store/TodoContext';
import Button from '../Button';
import Input from '../Input';

const INIT_FORM = {
  todo: '',
};

const AddTodoForm = () => {
  const { addTodo } = useTodoUpdater();

  const { todoModel, isSuccess, isError } = useModelContext();
  const { form, setForm, register, validation } = useForm(INIT_FORM);

  const submitHandler = useCallback(
    async (e) => {
      e.preventDefault();

      const response = await todoModel.addTodo(form);

      if (isSuccess(response)) {
        addTodo(response.data);
      } else if (isError(response)) {
        alert('error');
      }

      setForm(INIT_FORM);
    },
    [addTodo, form, isError, isSuccess, setForm, todoModel],
  );

  return (
    <StyledForm onSubmit={submitHandler}>
      <Input required {...register('todo')} />
      <Button disabled={!validation}>추가</Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 62px;
  gap: 12px;
  margin-top: 20px;
`;

export default AddTodoForm;
