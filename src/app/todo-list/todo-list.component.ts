import {Component, OnInit} from '@angular/core';
import {TodoMockupService} from "./todo-mockup.service";
import {Task} from "./task";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    tasks: Task[];

    //TODO for sufficient and excellent: change service in constructor below for the correct file (not mockup)
    constructor(private service: TodoMockupService) {
    }

    ngOnInit() {
        //TODO invoke method for fetching tasks
    }

    getTasks() {
        //TODO use method from service to fetch tasks and assign the result to the `tasks` array
    }
}
