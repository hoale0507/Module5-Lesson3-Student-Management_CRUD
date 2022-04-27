import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  currentStudent: Student = {};

  isShowCreateForm = false;
  isShowEditedForm = false;
  isShowDeleteInfo = false;

  constructor() {
    this.students = [
      {
        id: 3,
        name: 'Hoa',
        age: 28,
        country: 'VN'
      },
      {
        id: 5,
        name: 'Linh',
        age: 24,
        country: 'US'
      },
      {
        id: 6,
        name: 'Khoai',
        age: 2,
        country: 'UK'
      }
    ];
  }

  ngOnInit() {
  }

  changeStatus() {
    this.isShowCreateForm = !this.isShowCreateForm;
  }

  changeStatusForEditForm(student) {
    this.isShowEditedForm = !this.isShowEditedForm;
    this.currentStudent = student;
  }

  changeStatusDeleteForm(student: Student) {
    this.isShowDeleteInfo = !this.isShowDeleteInfo;
    this.currentStudent = student;
  }

  editStudent(student) {
    let index = -1;
    for (let i = 0; i < this.students.length; i++) {
      if (student.id === this.students[i].id) {
        index = i;
        break;
      }
    }
    this.students[index] = student;
  }
  addStudent(student) {
    this.students.push(student);
  }

  deleteStudent(id) {
    // for (const student of this.students) {
    //   if (student.id === id) {
    //     this.students.splice(student, 0);
    //   }
    // }

    for (let i = 0; i < this.students.length; i++){
      if (this.students[i].id === id) {
        this.students.splice(i, 1);
      }
    }
  }

}
