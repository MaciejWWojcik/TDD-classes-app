import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MaterialModule} from "./material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {ItemComponent} from "./todo-list/item/item.component";
import {TodoMockupService} from "./todo-list/todo-mockup.service";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";
import {CreateComponent} from "./create/create.component";
import {TodoService} from "./todo-list/todo.service";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        ItemComponent,
        CreateComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            {path: 'todo', component: TodoListComponent},
            {path: 'create', component: CreateComponent},
        ])
    ],
    providers: [TodoMockupService, TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
