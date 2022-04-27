import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { CreateStudentComponent } from './student/student-list/create-student/create-student.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudentEditComponent } from './student/student-list/student-edit/student-edit.component';
import { StudentDeleteComponent } from './student/student-list/student-delete/student-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    StudentEditComponent,
    StudentDeleteComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
