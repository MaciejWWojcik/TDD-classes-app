import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo-list/todo.service";
import {Task} from "../todo-list/task";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    name: string;

    constructor(private service: TodoService) {
    }

    ngOnInit() {
    }

    addTask(){
      let task = new Task(name,new Date())
      //TODO invoke method from service to send a new task to the server
    }
}
