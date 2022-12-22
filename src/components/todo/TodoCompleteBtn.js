import { useCallback, useContext } from 'react';
import styled from 'styled-components';
import { useModelContext } from '../../store/ModelContext';
import { TodoContext } from '../../store/TodoContext';

const TodoCompleteBtn = (prop) => {
  const { id, isCompleted, todo } = prop;
  const { setTodos } = useContext(TodoContext);
  const { todolist, isSuccess } = useModelContext();

  const updateTodoComplete = useCallback(async () => {
    const response = await todolist.updateTodo(id, { todo, isCompleted: !isCompleted });

    if (isSuccess(response)) {
      setTodos((prev) =>
        prev.map((el) => {
          if (el.id !== id) {
            return el;
          }
          return response.data;
        }),
      );
    }
  }, [id, todo, isCompleted, setTodos, isSuccess, todolist]);

  const changeChk = () => {
    updateTodoComplete();
    return !isCompleted;
  };

  return (
    <div>
      <CheckBtn type="checkbox" name="isCompleted" defaultChecked={isCompleted} onClick={changeChk} />
    </div>
  );
};

const CheckBtn = styled.input`
  display: inline-block;
  content: '';
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 10px;

  &:checked {
    background: blue;
  }
`;
export default TodoCompleteBtn;
