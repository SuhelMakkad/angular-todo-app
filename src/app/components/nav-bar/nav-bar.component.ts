import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  title = 'Todo List';
  navItems = [
    {
      title: 'Add Todo',
      href: '/add-todo',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
