import AddTodoForm from '../components/todo/AddTodoForm';
import Label from '../components/Label';
import List from '../components/List';
import TodoCard from '../components/todo/TodoCard';
import { useTodoState } from '../store/TodoContext';

const Todo = () => {
  const todos = useTodoState();

  return (
    <div>
      <Label>Todo</Label>
      <AddTodoForm />
      <List items={todos} onRender={(item) => <TodoCard key={item.id} {...item} />} />
    </div>
  );
};

export default Todo;
