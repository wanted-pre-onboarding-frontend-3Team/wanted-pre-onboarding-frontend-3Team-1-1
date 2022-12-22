import styled from 'styled-components';
import AddTodoForm from '../components/todo/AddTodoForm';
import TodoCard from '../components/todo/TodoCard';
import Label from '../components/Label';
import { useMount } from '../hooks/useMount';
import { useModelContext } from '../store/ModelContext';
import { useTodoContext } from '../store/TodoContext';

const Todo = () => {
  const { todos, setTodos } = useTodoContext();

  const { todoModel, isSuccess, isError } = useModelContext();

  useMount(async () => {
    const response = await todoModel.getTodos();

    if (isSuccess(response)) {
      setTodos(response.data);
    } else if (isError(response)) {
      alert(response.data.message);
    }
  });

  return (
    <div>
      <Label>Todo</Label>
      <AddTodoForm />
      <TodoList>
        {todos.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </TodoList>
    </div>
  );
};

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
`;

export default Todo;
