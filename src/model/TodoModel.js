import BaseModel from './BaseModel';

class TodoModel extends BaseModel {
  path = 'todos';

  createTodo(data) {
    return this.post({
      path: `${this.path}`,
      data,
    });
  }

  getTodos() {
    return this.get({
      path: `${this.path}`,
    });
  }

  updateTodos(id, data) {
    return this.put({
      path: `${this.path}/${id}`,
      data,
    });
  }

  deleteTodos(id) {
    return this.put({
      path: `${this.path}/${id}`,
    });
  }
}

export default TodoModel;
