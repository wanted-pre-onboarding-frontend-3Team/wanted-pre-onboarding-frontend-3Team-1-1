import styled from 'styled-components';
import TodoCompleteBtn from './TodoCompleteBtn';

const TodoItem = (prop) => {
  const { todo } = prop;

  return (
    <TodoItemBlock>
      <TodoCompleteBtn {...prop} />
      {todo}
    </TodoItemBlock>
  );
};

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
`;

export default TodoItem;
