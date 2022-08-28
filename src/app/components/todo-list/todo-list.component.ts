import { Component, OnInit } from '@angular/core';

import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = [];

  constructor(private todoService: TodoService) {
    this.todos = todoService.todos;
  }

  ngOnInit(): void {}

  handleToggleDone(id: string) {
    this.todoService.toggleDone(id);
  }
}
