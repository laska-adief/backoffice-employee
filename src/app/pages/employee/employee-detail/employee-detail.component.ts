import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
  subs!: Subscription;
  idEmployee: string = '';
  employeeData!: Employee | null;
  isWaitingForResponse: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subs = this.route.params.subscribe({
      next: (param) => {
        console.log(param);
        if (param['id']) {
          this.idEmployee = param['id'];
          this.getEmployee();
        }
      },
    });
  }

  getEmployee() {
    this.isWaitingForResponse = true;
    this.subs = this.employeeService.getOneEmployee(this.idEmployee).subscribe({
      next: (res) => {
        if (res) {
          this.isWaitingForResponse = false;
          this.employeeData = res;
        }
      },
      error: (err) => {
        console.log('Error', err);
        this.isWaitingForResponse = false;
      },
    });
  }

  backToEmployeeList() {
    this.router.navigate(['/employee/list']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
