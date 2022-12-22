import styled from 'styled-components';
import TodoButton from '../UI/todo/TodoButton';

const TodoItem = ({ todoInfo }) => {
  console.log(todoInfo);
  return (
    <TodoItemWrapper>
      <p>{todoInfo.todo}</p>
      <ButtonWrapper>
        <TodoButton title="수정">수정</TodoButton>
        <TodoButton title="삭제">삭제</TodoButton>
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

const ButtonWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

export default TodoItem;
