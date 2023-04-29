import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istudent } from 'src/app/model/interface';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  // displayedColumns: Array<string> = Object.keys(this.array);
  // dataSource = this.array;



  array: Array<Istudent> = this._studentsService.getAllStudents();
  displayedColumns: string[] = [ 'fname', 'lname', 'email', 'contact', 'edit', 'delete'];

  dataSource = this.array;



  constructor(public _studentsService: StudentsService) {}
  ngOnInit(): void {
    console.log(this._studentsService.StudentsArray);
  }
  OnEdit(obj: Istudent) {
    console.log(obj);
    this._studentsService.GetUpdateStudent(obj);
  }
  OnDelete(id: string, name: string) {
    console.log(id);
    this._studentsService.GetRemoveObject(id, name);
  }
}
