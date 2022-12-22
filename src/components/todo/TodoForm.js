import { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import TodoContext from '../../store/todo/todoContext';
import TodoButton from '../UI/todo/TodoButton';
import TodoInput from '../UI/todo/TodoInput';

const TodoForm = () => {
  const [isValid, setIsValid] = useState(false);
  const todoInputRef = useRef(null);
  const { addTodo } = useContext(TodoContext);

  const changeHandler = (e) => {
    if (e.target.value.trim() !== '') setIsValid(true);
    else setIsValid(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    addTodo(todoInputRef.current?.value);
    todoInputRef.current.value = '';
  };

  return (
    <TodoFormWrapper onSubmit={submitHandler}>
      <TodoInput id="todo" type="text" label="투두리스트" onChange={changeHandler} ref={todoInputRef} />
      <TodoButton title="등록" disabled={!isValid} />
    </TodoFormWrapper>
  );
};

const TodoFormWrapper = styled.form`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-top: 20px;
`;

export default TodoForm;
