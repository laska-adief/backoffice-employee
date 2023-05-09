# Backoffice Employee

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Application
DEMO : [Backoffice Employee](https://laska-adief.github.io/backoffice-employee/)

## Description 
Employee management app with responsive design and using api [mockapi.io/employees](https://645866830c15cb14821d0079.mockapi.io/employees)
Features : 
1. Login page 
   - For login use credential Username: admin | Password: admin
   - Set item 'token' with characters(Date.now()) in local storage 
   - Auth guard canActivate to prevent go to another page without login 
2. Employee List Page
   - Display data in table form
   - Filter, Sorting, Paging, Reset Functionality
   - Add employee button => go to add employee page form
   - Detail button (eye icon) => go to detail employee page
   - Edit & Delete button => currently only display notification snackbar
3. Employee Add Page
   - Validation mandatory in all field
   - Valdiation email in email field
   - Input type number in basic salary field
   - Datepicker type in birthdate filed
   - Selection type in status field
   - Autocomplete type in group field
   - Validation disabled button save if form invalid
   - Cancel button to go back to employee list
4. Employee Detail Page
   - Display data employee
   - Formatting date for field birthdate
   - Formatting number for basic salary field
   - Button ok to go back to employee list page
   - If there was filter before in employee list after click button data filter before still remain
5. Navbar
   - Responsive navbar
   - On mobile mode the menu will display bars and when click on it, will display menu link employee list and logout button
   - Cilck on Brand it will redirect to employee list page
   - Click on menu it will redirect to employee list page
   - Click on logout button will remove item token in local storage and redirect to login page
