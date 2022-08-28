import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() toggleDone: EventEmitter<any> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  handleDelete() {
    this.todoService.deleteItem(this.todo.id);
  }

  handleDoneToggle() {
    this.toggleDone.emit(this.todo.id);
  }
}
