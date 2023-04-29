import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/model/interface';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students-dashbord',
  templateUrl: './students-dashbord.component.html',
  styleUrls: ['./students-dashbord.component.scss'],
})
export class StudentsDashbordComponent implements OnInit {
  constructor(private _StudentsService: StudentsService) {}
  // arraynew: Array<Istudent> = this._StudentsService.getAllStudents();
  updatedObj!: Istudent;
  ngOnInit(): void {
    console.log(this._StudentsService.getAllStudents());
  }
  Ondoller(a: any) {
    let updatedObj = a;
    console.log(updatedObj);
  }
}
