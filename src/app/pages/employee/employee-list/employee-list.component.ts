import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit, AfterViewInit, OnDestroy {
  subs!: Subscription;

  dataSource = new MatTableDataSource<any>();
  dataSourceFruit = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'firstname',
    'lastname',
    'email',
    'status',
    'group',
    'action',
  ];
  displayedFilterColumns: string[] = [
    'firstnameFilter',
    'lastnameFilter',
    'emailFilter',
    'statusFilter',
    'groupFilter',
    'actionFilter',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  employee: Employee[] = [];
  employeeCount: number = 0;

  isWaitingForResponse: boolean = false;

  filteredValues = {
    firstname: '',
    lastname: '',
    email: '',
  };

  firstnameFilter = new FormControl();
  lastnameFilter = new FormControl();
  emailFilter = new FormControl();

  constructor(
    private employeeService: EmployeeService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployee();
    this.initFilter();
    this.dataSource.filterPredicate = this.customFilterPredicate();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  initFilter() {
    this.subs = this.firstnameFilter.valueChanges
      .pipe(debounceTime(300))
      .subscribe({
        next: (value) => {
          this.filteredValues['firstname'] = value;
          this.dataSource.filter = JSON.stringify(this.filteredValues);
        },
      });

    this.subs = this.lastnameFilter.valueChanges.subscribe({
      next: (value) => {
        this.filteredValues['lastname'] = value;
        this.dataSource.filter = JSON.stringify(this.filteredValues);
      },
    });

    this.subs = this.emailFilter.valueChanges.subscribe({
      next: (value) => {
        this.filteredValues['email'] = value;
        this.dataSource.filter = JSON.stringify(this.filteredValues);
      },
    });

    const lastFilter: any = this.employeeService.getLastFilter();
    if (lastFilter?.firstname || lastFilter?.lastname || lastFilter?.email) {
      this.firstnameFilter.setValue(lastFilter?.firstname);
      this.lastnameFilter.setValue(lastFilter?.lastname);
      this.emailFilter.setValue(lastFilter?.email);
    }
  }

  customFilterPredicate() {
    return (data: any, filter: string): boolean => {
      let searchString = JSON.parse(filter);

      const valueFilterFirstname =
        data.firstname
          .toString()
          .toLowerCase()
          .indexOf(searchString.firstname) !== -1;

      const valueFilterLastName =
        data.lastname
          .toString()
          .toLowerCase()
          .indexOf(searchString.lastname) !== -1;

      const valueFilterEmail =
        data.email.toString().toLowerCase().indexOf(searchString.email) !== -1;

      return valueFilterFirstname && valueFilterLastName && valueFilterEmail;
    };
  }

  getEmployee() {
    this.isWaitingForResponse = true;
    this.subs = this.employeeService.getAllEmployee().subscribe({
      next: (resp) => {
        if (resp?.length) {
          this.isWaitingForResponse = false;
          console.log('Resp', resp);
          this.employee = resp;
          this.dataSource.data = this.employee;
          this.employeeCount = this.employee.length;
        } else {
          this.isWaitingForResponse = false;
          this.dataSource.data = [];
          this.employeeCount = 0;
        }
      },
      error: (err) => {
        console.log('Error', err);
        this.isWaitingForResponse = false;
      },
    });
  }

  detailEmployee(id: string) {
    this.employeeService.emitFilter(this.filteredValues);
    this.router.navigate(['/employee/', id]);
  }

  addEmployee() {
    this.employeeService.emitFilter(null);
    this.router.navigate(['/employee/form']);
  }

  editEmployee() {
    this._snackBar.open('Data Updated', 'OK', {
      duration: 3000,
      panelClass: ['yellow-snackbar'],
    });
  }

  deleteEmployee() {
    this._snackBar.open('Data Deleted', 'OK', {
      duration: 3000,
      panelClass: ['red-snackbar'],
    });
  }

  resetButton() {
    this.firstnameFilter.setValue('', { emitEvent: false });
    this.lastnameFilter.setValue('', { emitEvent: false });
    this.emailFilter.setValue('', { emitEvent: false });
    this.employeeService.emitFilter(null);
    this.filteredValues = {
      firstname: '',
      lastname: '',
      email: '',
    };
    this.dataSource.filter = JSON.stringify(this.filteredValues);
    this.getEmployee();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
