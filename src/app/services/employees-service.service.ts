import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeesList } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) {}

  getEmployerList(): Observable<EmployeesList> {
    return this.http.get<EmployeesList>(`http://dummy.restapiexample.com/api/v1/employees`);
  }
}
