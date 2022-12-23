import AddTodoForm from '../components/todo/AddTodoForm';
import Label from '../components/Label';
import List from '../components/List';
import TodoCard from '../components/todo/TodoCard';
import { useTodoState, useTodoUpdater } from '../store/TodoContext';
import { useMount } from '../hooks/useMount';
import { useModelContext } from '../store/ModelContext';

const Todo = () => {
  const todos = useTodoState();
  const { setTodos } = useTodoUpdater();
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
      <List items={todos} onRender={(item) => <TodoCard key={item.id} {...item} />} />
    </div>
  );
};

export default Todo;
