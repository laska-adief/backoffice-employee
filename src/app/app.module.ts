import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { EmployeeFormComponent } from './pages/employee/employee-form/employee-form.component';
import { EmployeeDetailComponent } from './pages/employee/employee-detail/employee-detail.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    EmployeeDetailComponent,
    EmployeeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
