import {Injectable} from "@angular/core";

@Injectable()
export class Task {
    public isCompleted: boolean = false;
    public _id: string;
    public author: string;

    constructor(public name: string, public creationDate: Date) {
    }
}