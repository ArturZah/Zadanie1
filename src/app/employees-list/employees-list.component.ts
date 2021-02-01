import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees-service.service';
import { Subject } from 'rxjs';
import { EmployeesList } from '../models/Employee';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit, OnDestroy {
  employeesList: EmployeesList;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private employeesService: EmployeesService) {}

  ngOnInit() {
    this.employeesService.getEmployerList().pipe(takeUntil(this.destroy$)).subscribe( value => this.employeesList = value);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
