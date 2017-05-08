import { HttpClient, json } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export class TodoScreen {
  title: "Todos";
  todos: Todo[];
  newTodoDescription: string;

  constructor(private http: HttpClient) { }

  activate() {
    return this.http.fetch('/api/todos')
      .then(result => result.json() as Promise<Todo[]>)
      .then(data => {
        this.todos = data;
      });
  }

  addTodo() {
    if (this.newTodoDescription) {
      const todo = new Todo(this.newTodoDescription);

      this.todos.push(todo);
      this.newTodoDescription = '';

      this.http.fetch('/api/todos', {
        method: 'POST',
        body: json(todo)
      });
    }
  }

  removeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);

      this.http.fetch('/api/todos', {
        method: 'DELETE',
        body: json(todo)
      });
    }
  }
}

class Todo {
  done: boolean;
  constructor(public description) { }
}
