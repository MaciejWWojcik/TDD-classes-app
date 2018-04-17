import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Task} from "./task";

@Injectable()
export class TodoService {

    //TODO provide the base URL of the REST API (can be found in documentation)
    base = 'BASE URL HERE';

    //TODO provide your username for identyfing your personal task; try to make it unique
    username = 'YOUR USERNAME HERE';

    constructor(private http: HttpClient) {
    }

    getTasks() {
        let url = this.base + '/tasks/' + this.username;
        return this.http.get(url)
    }

    addTask(task: Task) {
        //TODO implement method
    }

}