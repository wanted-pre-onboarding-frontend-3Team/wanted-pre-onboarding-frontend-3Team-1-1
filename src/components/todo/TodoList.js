import TodoItem from './TodoItem';

const TodoList = ({ setTodoList, todoList }) => {
  return (
    <ul>{todoList && todoList.map((todo) => <TodoItem key={todo.id} todo={todo} setTodoList={setTodoList} />)}</ul>
  );
};

export default TodoList;
