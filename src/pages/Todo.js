import styled from 'styled-components';
import TodoForm from '../components/todo/TodoForm';
import TodoList from '../components/todo/TodoList';

const Todo = () => {
  return (
    <TodoWrapper>
      <h1>투두리스트</h1>
      <TodoForm />
      <TodoList />
    </TodoWrapper>
  );
};

const TodoWrapper = styled.div`
  width: 400px;
  margin: 60px auto 0;

  h1 {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
  }
`;

export default Todo;
