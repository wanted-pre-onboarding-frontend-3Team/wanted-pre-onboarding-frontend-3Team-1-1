import BaseModel from './BaseModel';

class TodoModel extends BaseModel {
  path = 'todos';

  createTodo(data) {
    return this.post({
      path: `${this.path}`,
      data,
    });
  }

  getTodo(data) {
    return this.get({
      path: `${this.path}`,
      data,
    });
  }

  updateTodo(data, id) {
    return this.put({
      path: `${this.path}/${id}`,
      data,
    });
  }

  deleteTodo(id) {
    return this.delete({
      path: `${this.path}/${id}`,
    });
  }
}

export default TodoModel;
