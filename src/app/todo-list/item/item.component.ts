import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../task";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    @Input() task: Task;

    constructor() {
    }

    ngOnInit() {
    }

    getFormattedDate(date) {
        return new Date(date).toLocaleString();
    }
}
