import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../../../model/student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student: Student = {};
  @Output()
  createEvent = new EventEmitter<Student>();
  constructor() { }

  ngOnInit() {
  }

  createStudent() {
    this.createEvent.emit(this.student);
  }
}
