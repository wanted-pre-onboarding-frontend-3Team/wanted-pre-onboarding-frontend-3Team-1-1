import { useCallback, useContext } from 'react';
import styled from 'styled-components';
import useForm from '../../hooks/useForm';
import { useModelContext } from '../../store/ModelContext';
import { TodoContext } from '../../store/TodoContext';
import Button from '../Button';
import TextInput from '../TextInput';

const INIT_FORM = {
  todo: '',
};

const TodoCreateForm = () => {
  const { setTodos } = useContext(TodoContext);
  const { todolist, isSuccess } = useModelContext();
  const { form, setValue, setForm } = useForm(INIT_FORM);

  const createTodo = useCallback(
    async (e) => {
      e.preventDefault();

      const response = await todolist.createTodo(form);

      if (isSuccess(response)) {
        setTodos((prev) => [...prev, response.data]);
        setForm(INIT_FORM);
      }
    },
    [form, setTodos, isSuccess, setForm, todolist],
  );

  return (
    <TodoForm onSubmit={createTodo}>
      <TextInput type="text" name="todo" value={form.todo} required onChange={setValue} />
      <Button>추가</Button>
    </TodoForm>
  );
};

const TodoForm = styled.form`
  display: flex;
`;

export default TodoCreateForm;
