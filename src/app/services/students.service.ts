import { Injectable, OnInit } from '@angular/core';
import { Istudent } from '../model/interface';
import { Students } from '../const/array';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private _snackbarService: SnackbarService) {}
  StudentsArray: Array<Istudent> = Students;
  ngOnInit(): void {
    // console.log("this.StudentsArray")
  }
  getAllStudents(): Array<Istudent> {
    return this.StudentsArray;
  }
  getAddStudents(obj: Istudent): void {
    this.StudentsArray.push(obj);
    this._snackbarService.onOpenSnackBar(`${obj.fname} is added successfully`);
  }
  EmptyControl(msg:HTMLInputElement){
    this._snackbarService.onOpenSnackBar(`Please write in input control`);

  }
  GetUpdateStudent(para: Istudent): Array<any> {
    return this.StudentsArray.filter((ele) => {
      ele.contact;
    });
  }
  GetRemoveObject(id: string, fname: string) {
    let index = this.StudentsArray.findIndex((ele) => {
     return ele.id === id;
    });
    let removedObj = this.StudentsArray.splice(index, 1);
    this._snackbarService.onOpenSnackBar(`${fname} is removed successfully`);
  }
}
