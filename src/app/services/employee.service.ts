import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  API_URL = 'https://645866830c15cb14821d0079.mockapi.io/employees';

  constructor(private http: HttpClient) {}

  lastFilter$ = new BehaviorSubject({});

  getAllEmployee() {
    return this.http.get<Employee[]>(this.API_URL);
  }

  getOneEmployee(id: string) {
    return this.http.get<Employee>(this.API_URL + '/' + id);
  }

  addEmployee(data: Employee) {
    return this.http.post<Employee>(this.API_URL, data);
  }

  emitFilter(filter: any) {
    this.lastFilter$.next(filter);
    console.log('lastfiler', filter);
  }

  getLastFilter() {
    return this.lastFilter$.getValue();
  }
}
