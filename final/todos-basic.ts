export class TodosScreen {
  title: "Todos";
  todos: Todo[] = [];
  newTodoDescription: string;

  addTodo() {
    if (this.newTodoDescription) {
      const todo = new Todo(this.newTodoDescription);
      this.todos.push(todo);
      this.newTodoDescription = '';
    }
  }

  removeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}

class Todo {
  done: boolean;
  constructor(public description) { }
}
