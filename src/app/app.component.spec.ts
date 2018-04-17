import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {MaterialModule} from "./material.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ], imports: [
                BrowserModule,
                MaterialModule,
                BrowserAnimationsModule
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    //TODO add proper description of test expectation below (the test applies to checking if app has proper app title in variable)

    it(`PROVIDE TEST DESCRIPTION HERE`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('TDD classes');
    }));


    it('should render title in a mat-toolbar tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        //TODO implement the test (hint: check the text content of mat-toolbar)
    }));

});
