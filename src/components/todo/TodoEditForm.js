import { useCallback, useContext } from 'react';
import styled from 'styled-components';
import useForm from '../../hooks/useForm';
import { useModelContext } from '../../store/ModelContext';
import { TodoContext } from '../../store/TodoContext';
import Button from '../Button';
import TextInput from '../TextInput';

const TodoEditForm = (prop) => {
  const { id, isCompleted, todo, onEdit, setOnEdit } = prop;
  const { setTodos } = useContext(TodoContext);
  const { todolist, isSuccess } = useModelContext();
  const { form, setValue } = useForm({ todo, isCompleted });

  const createTodo = useCallback(
    async (e) => {
      e.preventDefault();

      const response = await todolist.updateTodo(id, form);

      if (isSuccess(response)) {
        setTodos((prev) =>
          prev.map((el) => {
            if (el.id !== id) {
              return el;
            }
            return response.data;
          }),
        );
        setOnEdit(!onEdit);
      }
    },
    [todolist, id, form, isSuccess, setTodos, setOnEdit, onEdit],
  );

  return (
    <TodoForm onSubmit={createTodo}>
      <TextInput type="text" name="todo" defaultValue={todo} required onChange={setValue} />
      <Button>수정</Button>
    </TodoForm>
  );
};

const TodoForm = styled.form`
  display: flex;
  flex: 1;
  gap: 5px;
`;

export default TodoEditForm;
