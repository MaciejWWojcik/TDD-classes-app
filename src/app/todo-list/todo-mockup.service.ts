import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import {Task} from "./task";

@Injectable()
export class TodoMockupService {

    mockupTasks: Task[] = [];

    constructor() {
        this.mockupTasks.push(new Task("Prepare report for Data Mining", new Date()));
        this.mockupTasks.push(new Task("Use mockup-service for sufficient level", new Date()));
        this.mockupTasks.push(new Task("Learn TDD in Angular", new Date()));
        this.mockupTasks.push(new Task("Find a new hot topic", new Date()));
    }

    getTasks() {
        return Observable.of((this.mockupTasks).map(x => Object.assign({}, x)));
    }

    addTask(task: Task) {
        this.mockupTasks.push(task);
        return Observable.of(true);
    }

}
