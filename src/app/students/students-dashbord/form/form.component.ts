import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istudent } from 'src/app/model/interface';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { StudentsService } from 'src/app/services/students.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(
    private _studentsService: StudentsService,
    private _snackbarService: SnackbarService,
    private _utilityService: UtilityService
  ) {}

  ngOnInit(): void {}
  OnAddStudent(
    fname: HTMLInputElement,
    lname: HTMLInputElement,
    contact: HTMLInputElement,
    email: HTMLInputElement
  ) {
    if (
      (fname.value.length &&
        lname.value.length &&
        contact.value.length &&
        email.value.length) > 0
    ) {
      let obj: Istudent = {
        fname: fname.value,
        lname: lname.value,
        contact: contact.value,
        email: email.value,
        id: this._utilityService.uuid(),
      };
      fname.value = '';
      lname.value = '';
      contact.value = '';
      email.value = '';
      this._studentsService.getAddStudents(obj);
    } else if (
      (fname.value.length &&
        lname.value.length &&
        contact.value.length &&
        email.value.length) === 0
    ) {
      this._studentsService.EmptyControl(fname && lname && contact && email);
    }
  }
}
