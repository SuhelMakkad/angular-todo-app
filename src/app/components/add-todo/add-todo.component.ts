import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { v4 as uuidv4 } from 'uuid';

import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/service/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  addTodoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {}

  handleFormSubmit() {
    const id = uuidv4();
    const { title, description } = this.addTodoForm.value;
    if (!title || !description) return;

    const todo: Todo = { id, title, description, isDone: false };

    this.todoService.addNewItem(todo);
    this.addTodoForm.reset();
    this.router.navigate(['todo', id]);
  }
}
