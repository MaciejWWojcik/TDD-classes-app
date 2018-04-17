import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoListComponent} from './todo-list.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {MaterialModule} from "../material.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TodoMockupService} from "./todo-mockup.service";

describe('TodoListComponent', () => {
    let component: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoListComponent],
            imports: [
                BrowserModule,
                MaterialModule,
                BrowserAnimationsModule
            ], providers: [TodoMockupService],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    /** TODO implement 3 tests
     * NOTE: another beforeEach()/extending the one above might be needed to initialize `component` and `fixture` variables
     */

});
