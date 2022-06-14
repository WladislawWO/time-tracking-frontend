import httpClient from '../api/httpClient';

class TodoService {
  getTodoList() {
    return httpClient.get('todo').then((res) => res);
  }

  updateTodo({
    title, todos, completed, _id,
  }) {
    return httpClient.post('todo/update', {
      title, todos, completed, _id,
    }).then((res) => res);
  }

  createTodo({ title, todos }) {
    return httpClient.post('todo/create', { title, todos }).then((res) => res);
  }

  deleteTodo(id) {
    return httpClient.delete(`todo/${id}`).then((res) => res);
  }
}

export const todoService = new TodoService();
