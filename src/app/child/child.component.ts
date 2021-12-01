import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo/todo.module';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  todo: Todo;
  todoList: Todo[];
  @Output() todoAdded: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService: TodoServiceService) {
    this.todo = {
      id: 0,
      task: '',
      status: false,
    };
  }

  ngOnInit() {}
  addTodo() {
    console.log(this.todo);
    //this.todoAdded.emit(this.todo);
    this.todoService.addTodo(this.todo);
    this.todo = {
      id: 0,
      task: '',
      status: false,
    };
  }

  viewTodo() {
    this.todoList = [];
    this.todoList = this.todoService.getTodo();
    console.log('Just checking: ', this.todoList);
  }
}
