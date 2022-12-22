import { useCallback } from 'react';
import { useModelContext } from '../../store/ModelContext';
import useForm from '../../hooks/useForm';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';

const INIT_FORM = {
  todo: '',
};
const TodoCreate = ({ setTodoList }) => {
  const { todoModel, isSuccess, isError } = useModelContext();
  const { register, form, setForm, validation } = useForm(INIT_FORM);

  const requestTodo = useCallback(
    async (e) => {
      e.preventDefault();
      const response = await todoModel.createTodo(form);

      if (isSuccess(response)) {
        setForm(INIT_FORM);
        setTodoList((prev) => [response.data, ...prev]);
      } else if (isError(response)) {
        //
      }
    },
    [form, isError, isSuccess, setForm, setTodoList, todoModel],
  );

  return (
    <StyledForm onSubmit={requestTodo}>
      <Input type="text" title="투두" required value={form.todo} {...register('todo')} />
      <Button disabled={!validation}>등록</Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
  margin-top: 12px;
`;
export default TodoCreate;
