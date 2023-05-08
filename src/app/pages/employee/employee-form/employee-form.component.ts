import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map, startWith } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;

  maxDate = new Date();

  groupList = [
    'group 1',
    'group 2',
    'group 3',
    'group 4',
    'group 5',
    'group 6',
    'group 7',
    'group 8',
    'group 9',
    'group 10',
  ];
  fiteredGroupList!: Observable<string[]> | undefined;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.fiteredGroupList = this.employeeForm.get('group')?.valueChanges.pipe(
      startWith(''),
      map((value: string) =>
        this.groupList.filter((option: string) =>
          option.toLowerCase().includes(value)
        )
      )
    );
  }

  initForm() {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      basicSalary: ['', Validators.required],
      status: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  submitForm() {
    this.addEmployee();
  }

  addEmployee() {
    const data = this.employeeForm.value;
    this.employeeService.addEmployee(data).subscribe({
      next: (res) => {
        if (res) {
          this.employeeForm.reset();
          this.employeeForm.markAsUntouched();
          this.employeeForm.markAsPristine();
          console.log('empform', this.employeeForm);
          this._snackBar
            .open('Data Added', 'OK', {
              duration: 5000,
              panelClass: ['green-snackbar'],
            })
            .afterDismissed()
            .subscribe({
              next: (value) => {
                console.log('VALUE', value);
              },
            });
        }
      },
      error: (err) => {
        console.log('Error', err);
      },
    });
  }
}
