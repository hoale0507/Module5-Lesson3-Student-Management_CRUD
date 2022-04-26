import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../../../model/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  @Input()
  student: Student = {};
  @Output()
  eventEmitter = new EventEmitter<Student>();

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.eventEmitter.emit(this.student);
  }
}
