import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo/todo.module';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  todoList: Todo[];
  constructor() {
    this.todoList = [];
  }

  ngOnInit() {}
  todoAdded(todo: Todo) {
    console.log('Parent : ', todo);
    this.todoList.push(todo);

    console.log(this.todoList);
  }
}
