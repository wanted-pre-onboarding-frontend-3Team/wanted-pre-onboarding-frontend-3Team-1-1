import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import AuthContext from '../../store/auth/authContext';
import TodoContext from '../../store/todo/todoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { fetchTodo, todoList } = useContext(TodoContext);

  useEffect(() => {
    if (isLoggedIn) fetchTodo();
  }, [isLoggedIn, fetchTodo]);

  return (
    <TodoListWrapper>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todoInfo={todo} />
      ))}
    </TodoListWrapper>
  );
};

const TodoListWrapper = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-flow: column;
  gap: 10px;
`;

export default TodoList;
