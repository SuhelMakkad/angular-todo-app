import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Array<Todo> = [];
  localStorageKey = 'todos';

  constructor() {
    const itemsInLocalStorage = localStorage.getItem(this.localStorageKey);
    this.todos = itemsInLocalStorage ? JSON.parse(itemsInLocalStorage) : [];
  }

  getItem(id: string): Todo | undefined {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index < 0) return;

    return this.todos[index];
  }

  toggleDone(id: string) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index < 0) return;

    this.todos[index].isDone = !this.todos[index].isDone;
  }

  addNewItem(todo: Todo) {
    this.todos.push(todo);
    this.updateLocalTodos();
  }

  deleteItem(id: string) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index < 0) return;

    this.todos.splice(index, 1);
    this.updateLocalTodos();
  }

  updateLocalTodos() {
    const todosStr = JSON.stringify(this.todos);
    localStorage.setItem(this.localStorageKey, todosStr);
  }
}
