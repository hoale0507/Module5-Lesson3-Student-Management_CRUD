import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../../../model/student';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {
  @Input()
  student: Student = {};
  @Output()
  deleteEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  addDeleteEvent(id: number) {
    this.deleteEvent.emit(id);
  }
}
