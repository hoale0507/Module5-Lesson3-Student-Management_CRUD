import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../../../model/student';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  studentForm: FormGroup = new FormGroup(
    {
      id: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
      age: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required])
    }
  )

  get idControl() {
    return this.studentForm.get('id');
  }
  get nameControl() {
    return this.studentForm.get('name');
  }
  get ageControl() {
    return this.studentForm.get('age');
  }
  get countryControl() {
    return this.studentForm.get('country');
  }

  constructor() { }

  ngOnInit() {
    this.studentForm.get('id').setValue(this.student.id);
    this.studentForm.get('name').setValue(this.student.name);
    this.studentForm.get('age').setValue(this.student.age);
    this.studentForm.get('country').setValue(this.student.country);
  }

  submit() {
    if(this.studentForm.valid){
      this.eventEmitter.emit(this.studentForm.value);
    } else {
      console.log("Error!");
    }
  }
}
