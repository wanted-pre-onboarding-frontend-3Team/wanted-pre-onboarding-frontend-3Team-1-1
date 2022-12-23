import { useCallback } from 'react';
import styled from 'styled-components';
import { useModelContext } from '../../store/ModelContext';

const TodoCompleteBtn = (prop) => {
  const { id, isCompleted, todo, setTodos } = prop;
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

  const handleChk = () => {
    updateTodoComplete();
    return !isCompleted;
  };

  return (
    <div>
      <CheckBtn
        type="checkbox"
        name="isCompleted"
        isCompleted={isCompleted}
        defaultChecked={isCompleted}
        onClick={handleChk}
      />
    </div>
  );
};

const CheckBtn = styled.input`
  display: inline-block;
  content: '';
  width: 20px;
  height: 20px;
  background-color: #eee;
  border: 1px solid #ddd;
  margin-left: 8px;

  &:checked {
    background: #e57373;
  }
`;
export default TodoCompleteBtn;
