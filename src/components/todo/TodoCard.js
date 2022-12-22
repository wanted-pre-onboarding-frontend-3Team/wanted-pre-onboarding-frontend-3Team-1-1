import { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import useForm from '../../hooks/useForm';
import { useModelContext } from '../../store/ModelContext';
import { useTodoUpdater } from '../../store/TodoContext';
import Button, { BUTTON_COLOR_WHITE, BUTTON_SIZE_SMALL } from '../Button';
import Checkbox from '../CheckBox';
import Input from '../Input';

const TodoCard = (props) => {
  const { id, todo, isCompleted } = props;

  const { deleteTodo, updateTodo } = useTodoUpdater();
  const { todoModel, isSuccess, isError } = useModelContext();

  const [isEdit, setIsEdit] = useState(false);

  const { form, register, validation } = useForm({ todo, isCompleted });

  const requestDeleteTodo = useCallback(async () => {
    const response = await todoModel.deleteTodo(id);

    if (isSuccess(response)) {
      deleteTodo(id);
    } else if (isError(response)) {
      alert(response.data.message);
    }
  }, [deleteTodo, id, isError, isSuccess, todoModel]);

  const requestUpdateTodo = useCallback(
    async (e) => {
      e.preventDefault();

      const response = await todoModel.updateTodo(id, form);

      if (isSuccess(response)) {
        updateTodo(response.data);

        setIsEdit(false);
      } else if (isError(response)) {
        alert(response.data.message);
      }
    },
    [form, id, isError, isSuccess, todoModel, updateTodo],
  );

  return (
    <StyledCard as={isEdit ? 'form' : 'li'} onSubmit={requestUpdateTodo}>
      {isEdit ? <Input required {...register('todo')} /> : <p>{todo}</p>}

      {isEdit ? (
        <StyledButtonBox>
          <Checkbox defaultChecked={isCompleted} {...register('isCompleted')} />
          <Button type="submit" disabled={!validation} size={BUTTON_SIZE_SMALL} color={BUTTON_COLOR_WHITE}>
            완료
          </Button>
          <Button type="button" size={BUTTON_SIZE_SMALL} onClick={() => setIsEdit(false)}>
            취소
          </Button>
        </StyledButtonBox>
      ) : (
        <StyledButtonBox>
          <Button size={BUTTON_SIZE_SMALL} color={BUTTON_COLOR_WHITE} onClick={() => setIsEdit(true)}>
            수정
          </Button>
          <Button size={BUTTON_SIZE_SMALL} onClick={requestDeleteTodo}>
            삭제
          </Button>
        </StyledButtonBox>
      )}
    </StyledCard>
  );
};

const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  padding: 8px 14px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background-color: #ffffff;
`;

const StyledButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default memo(TodoCard);
