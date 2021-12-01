import { Injectable } from '@angular/core';
import { Todo } from './todo/todo.module';

@Injectable()
export class TodoServiceService {
  todoList: Todo[];
  constructor() {
    this.todoList = [];
  }
  addTodo(todo: Todo) {
    this.todoList.unshift(todo);
    //console.log('todolist after add ', this.todoList);
  }
  getTodo(): Todo[] {
    return this.todoList;
  }
}
