import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';

import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoId: string = '';
  todo!: Todo;

  constructor(
    route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {
    route.params.subscribe((params) => {
      this.todoId = params['id'];
    });
  }

  ngOnInit(): void {
    const todoItem = this.todoService.getItem(this.todoId);
    if (!todoItem) {
      this.router.navigate(['/']);
      return;
    }

    this.todo = todoItem;
  }

  handleDelete() {
    this.todoService.deleteItem(this.todoId);
    this.router.navigate(['/']);
  }

  handleDoneToggle() {
    this.todoService.toggleDone(this.todoId);
  }
}
