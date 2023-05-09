"use strict";(self.webpackChunkbackoffice_employee=self.webpackChunkbackoffice_employee||[]).push([[759],{759:(He,M,a)=>{a.r(M),a.d(M,{EmployeeModule:()=>Be});var u=a(6895),p=a(9299),e=a(4650),N=a(7556),g=a(4859),A=a(7392),F=a(8255);const T=function(){return["/employee/list"]};let D=(()=>{class t{constructor(n,o){this.router=n,this.authService=o}ngOnInit(){}logout(){this.authService.unsetTokenLogin(),this.router.navigate(["/login"])}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.F0),e.Y36(N.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-navbar"]],decls:29,vars:7,consts:[[1,"nav"],[1,"nav__brand",3,"routerLink"],[1,"nav__menu"],[1,"menu-desktop"],["routerLinkActive","active-link",3,"routerLink"],["mat-flat-button","","color","warn",3,"click"],[1,"menu-mobile","bar-icon",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"routerLink"],[1,"text-center","w-full"]],template:function(n,o){if(1&n&&(e.TgZ(0,"nav")(1,"div",0)(2,"div",1)(3,"p"),e._uU(4,"Backoffice"),e.qZA()(),e.TgZ(5,"div",2)(6,"div",3)(7,"ul")(8,"li")(9,"a",4),e._uU(10,"Employee List"),e.qZA()(),e.TgZ(11,"button",5),e.NdJ("click",function(){return o.logout()}),e.TgZ(12,"mat-icon"),e._uU(13,"logout"),e.qZA(),e.TgZ(14,"span"),e._uU(15,"Logout"),e.qZA()()()(),e.TgZ(16,"div",6)(17,"mat-icon"),e._uU(18,"menu"),e.qZA()(),e.TgZ(19,"mat-menu",null,7)(21,"a",8),e._uU(22,"Employee List"),e.qZA(),e.TgZ(23,"div",9)(24,"button",5),e.NdJ("click",function(){return o.logout()}),e.TgZ(25,"mat-icon"),e._uU(26,"logout"),e.qZA(),e.TgZ(27,"span"),e._uU(28,"Logout"),e.qZA()()()()()()()),2&n){const i=e.MAs(20);e.xp6(2),e.Q6J("routerLink",e.DdM(4,T)),e.xp6(7),e.Q6J("routerLink",e.DdM(5,T)),e.xp6(7),e.Q6J("matMenuTriggerFor",i),e.xp6(5),e.Q6J("routerLink",e.DdM(6,T))}},dependencies:[p.rH,p.yS,p.Od,g.lW,A.Hw,F.VK,F.OP,F.p6],styles:["nav[_ngcontent-%COMP%]{width:100%;background:#1D267D}nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin:0 auto;width:90%}nav[_ngcontent-%COMP%]   .nav__brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-weight:500;text-transform:uppercase;letter-spacing:4px;margin:0!important;cursor:pointer}nav[_ngcontent-%COMP%]   .nav__menu[_ngcontent-%COMP%]{display:flex;align-items:center}nav[_ngcontent-%COMP%]   .nav__menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center;justify-content:space-around;gap:16px}nav[_ngcontent-%COMP%]   .nav__menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff;cursor:pointer;transition:all .15s}nav[_ngcontent-%COMP%]   .nav__menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#feff86}nav[_ngcontent-%COMP%]   .nav__menu[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%]{padding:8px 0;cursor:pointer}nav[_ngcontent-%COMP%]   .nav__menu[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.active-link[_ngcontent-%COMP%]{color:#feff86!important}.menu-desktop[_ngcontent-%COMP%]{display:none}.menu-mobile[_ngcontent-%COMP%]{display:flex;align-items:center}@media (min-width: 640px){.menu-desktop[_ngcontent-%COMP%]{display:initial}.menu-mobile[_ngcontent-%COMP%]{display:none}}"]}),t})(),L=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-employee"]],decls:3,vars:0,consts:[[1,"container"]],template:function(n,o){1&n&&(e._UZ(0,"app-navbar"),e.TgZ(1,"div",0),e._UZ(2,"router-outlet"),e.qZA())},dependencies:[p.lC,D],styles:[".container[_ngcontent-%COMP%]{width:100%}"]}),t})();var m=a(7155),q=a(8739),v=a(6308),r=a(4006),J=a(8372),Y=a(1135),Q=a(529);let O=(()=>{class t{constructor(n){this.http=n,this.API_URL="https://645866830c15cb14821d0079.mockapi.io/employees",this.lastFilter$=new Y.X({})}getAllEmployee(){return this.http.get(this.API_URL)}getOneEmployee(n){return this.http.get(this.API_URL+"/"+n)}addEmployee(n){return this.http.post(this.API_URL,n)}emitFilter(n){this.lastFilter$.next(n),console.log("lastfiler",n)}getLastFilter(){return this.lastFilter$.getValue()}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(Q.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var P=a(7009),_=a(9549),U=a(4144),k=a(1572);function I(t,l){1&t&&(e.TgZ(0,"th",29),e._uU(1," firstname "),e.qZA())}function S(t,l){if(1&t&&(e.TgZ(0,"td",30),e._uU(1),e.qZA()),2&t){const n=l.$implicit;e.xp6(1),e.hij(" ",n.firstname," ")}}function R(t,l){1&t&&(e.TgZ(0,"th",29),e._uU(1," lastname "),e.qZA())}function B(t,l){if(1&t&&(e.TgZ(0,"td",30),e._uU(1),e.qZA()),2&t){const n=l.$implicit;e.xp6(1),e.hij(" ",n.lastname," ")}}function H(t,l){1&t&&(e.TgZ(0,"th",29),e._uU(1," email "),e.qZA())}function V(t,l){if(1&t&&(e.TgZ(0,"td",30),e._uU(1),e.qZA()),2&t){const n=l.$implicit;e.xp6(1),e.hij(" ",n.email," ")}}function W(t,l){1&t&&(e.TgZ(0,"th",29),e._uU(1," status "),e.qZA())}function G(t,l){if(1&t&&(e.TgZ(0,"td",30),e._uU(1),e.qZA()),2&t){const n=l.$implicit;e.xp6(1),e.hij(" ",n.status," ")}}function j(t,l){1&t&&(e.TgZ(0,"th",29),e._uU(1," group "),e.qZA())}function z(t,l){if(1&t&&(e.TgZ(0,"td",30),e._uU(1),e.qZA()),2&t){const n=l.$implicit;e.xp6(1),e.hij(" ",n.group," ")}}function K(t,l){1&t&&(e.TgZ(0,"th",29),e._uU(1," action "),e.qZA())}function $(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"td",30)(1,"button",31),e.NdJ("click",function(){const c=e.CHM(n).$implicit,s=e.oxw();return e.KtG(s.detailEmployee(null==c?null:c.id))}),e.TgZ(2,"mat-icon"),e._uU(3,"visibility"),e.qZA()(),e.TgZ(4,"button",32),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.editEmployee())}),e.TgZ(5,"mat-icon"),e._uU(6,"edit"),e.qZA()(),e.TgZ(7,"button",33),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.deleteEmployee())}),e.TgZ(8,"mat-icon"),e._uU(9,"delete"),e.qZA()()()}}function X(t,l){if(1&t&&(e.TgZ(0,"th",34)(1,"mat-form-field"),e._UZ(2,"input",35),e.qZA()()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("formControl",n.firstnameFilter)}}function ee(t,l){if(1&t&&(e.TgZ(0,"th",34)(1,"mat-form-field"),e._UZ(2,"input",35),e.qZA()()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("formControl",n.lastnameFilter)}}function te(t,l){if(1&t&&(e.TgZ(0,"th",34)(1,"mat-form-field"),e._UZ(2,"input",35),e.qZA()()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("formControl",n.emailFilter)}}function ne(t,l){1&t&&e._UZ(0,"th",34)}function oe(t,l){1&t&&e._UZ(0,"th",34)}function le(t,l){1&t&&e._UZ(0,"th",34)}function ie(t,l){1&t&&(e.TgZ(0,"th",36),e._UZ(1,"mat-spinner",37),e.qZA())}function ae(t,l){1&t&&e._UZ(0,"tr",38)}function re(t,l){1&t&&e._UZ(0,"tr",38)}function me(t,l){if(1&t&&e._UZ(0,"tr",39),2&t){const n=e.oxw();e.Q6J("hidden",!n.isWaitingForResponse)}}function pe(t,l){if(1&t&&e._UZ(0,"tr",40),2&t){const n=e.oxw();e.Q6J("hidden",n.isWaitingForResponse)}}function se(t,l){1&t&&(e.TgZ(0,"tr",41)(1,"td",42),e._uU(2,"No data to show"),e.qZA()())}const ce=function(){return["loading"]},ue=function(){return[5,10,25,100]};let de=(()=>{class t{constructor(n,o,i){this.employeeService=n,this._snackBar=o,this.router=i,this.dataSource=new m.by,this.dataSourceFruit=new m.by,this.displayedColumns=["firstname","lastname","email","status","group","action"],this.displayedFilterColumns=["firstnameFilter","lastnameFilter","emailFilter","statusFilter","groupFilter","actionFilter"],this.employee=[],this.employeeCount=0,this.isWaitingForResponse=!1,this.filteredValues={firstname:"",lastname:"",email:""},this.firstnameFilter=new r.NI,this.lastnameFilter=new r.NI,this.emailFilter=new r.NI}ngOnInit(){this.getEmployee(),this.initFilter(),this.dataSource.filterPredicate=this.customFilterPredicate()}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}initFilter(){this.subs=this.firstnameFilter.valueChanges.pipe((0,J.b)(300)).subscribe({next:o=>{this.filteredValues.firstname=o,this.dataSource.filter=JSON.stringify(this.filteredValues)}}),this.subs=this.lastnameFilter.valueChanges.subscribe({next:o=>{this.filteredValues.lastname=o,this.dataSource.filter=JSON.stringify(this.filteredValues)}}),this.subs=this.emailFilter.valueChanges.subscribe({next:o=>{this.filteredValues.email=o,this.dataSource.filter=JSON.stringify(this.filteredValues)}});const n=this.employeeService.getLastFilter();(n?.firstname||n?.lastname||n?.email)&&(this.firstnameFilter.setValue(n?.firstname),this.lastnameFilter.setValue(n?.lastname),this.emailFilter.setValue(n?.email))}customFilterPredicate(){return(n,o)=>{let i=JSON.parse(o);const c=-1!==n.firstname.toString().toLowerCase().indexOf(i.firstname),s=-1!==n.lastname.toString().toLowerCase().indexOf(i.lastname),d=-1!==n.email.toString().toLowerCase().indexOf(i.email);return c&&s&&d}}getEmployee(){this.isWaitingForResponse=!0,this.subs=this.employeeService.getAllEmployee().subscribe({next:n=>{n?.length?(this.isWaitingForResponse=!1,console.log("Resp",n),this.employee=n,this.dataSource.data=this.employee,this.employeeCount=this.employee.length):(this.isWaitingForResponse=!1,this.dataSource.data=[],this.employeeCount=0)},error:n=>{console.log("Error",n),this.isWaitingForResponse=!1}})}detailEmployee(n){this.employeeService.emitFilter(this.filteredValues),this.router.navigate(["/employee/",n])}addEmployee(){this.employeeService.emitFilter(null),this.router.navigate(["/employee/form"])}editEmployee(){this._snackBar.open("Data Updated","OK",{duration:3e3,panelClass:["yellow-snackbar"]})}deleteEmployee(){this._snackBar.open("Data Deleted","OK",{duration:3e3,panelClass:["red-snackbar"]})}resetButton(){this.firstnameFilter.setValue("",{emitEvent:!1}),this.lastnameFilter.setValue("",{emitEvent:!1}),this.emailFilter.setValue("",{emitEvent:!1}),this.employeeService.emitFilter(null),this.filteredValues={firstname:"",lastname:"",email:""},this.dataSource.filter=JSON.stringify(this.filteredValues),this.getEmployee()}ngOnDestroy(){this.subs.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(O),e.Y36(P.ux),e.Y36(p.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-employee-list"]],viewQuery:function(n,o){if(1&n&&(e.Gf(q.NW,5),e.Gf(v.YE,5)),2&n){let i;e.iGM(i=e.CRH())&&(o.paginator=i.first),e.iGM(i=e.CRH())&&(o.sort=i.first)}},decls:47,vars:8,consts:[[1,"employee"],[1,"container-button"],["mat-raised-button","",1,"add-button",3,"click"],["mat-raised-button","",1,"reset-button",3,"click"],[1,"employee__table"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","firstname"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","lastname"],["matColumnDef","email"],["matColumnDef","status"],["matColumnDef","group"],["matColumnDef","action"],["matColumnDef","firstnameFilter"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","lastnameFilter"],["matColumnDef","emailFilter"],["matColumnDef","statusFilter"],["matColumnDef","groupFilter"],["matColumnDef","actionFilter"],["matColumnDef","loading"],["mat-header-cell","","colspan","100%",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-header-row","",3,"hidden",4,"matHeaderRowDef"],["mat-row","",3,"hidden",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],[1,"pagination"],[3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-icon-button","",1,"detail-button",3,"click"],["mat-icon-button","",1,"edit-button",3,"click"],["mat-icon-button","",1,"delete-button",3,"click"],["mat-header-cell",""],["matInput","","placeholder","search",3,"formControl"],["mat-header-cell","","colspan","100%"],[1,"spinner"],["mat-header-row",""],["mat-header-row","",3,"hidden"],["mat-row","",3,"hidden"],[1,"mat-row"],["colspan","100%",1,"mat-cell"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return o.addEmployee()}),e._uU(3,"Add Employee"),e.qZA(),e.TgZ(4,"button",3),e.NdJ("click",function(){return o.resetButton()}),e._uU(5,"Reset"),e.qZA()(),e.TgZ(6,"div",4)(7,"table",5),e.ynx(8,6),e.YNc(9,I,2,0,"th",7),e.YNc(10,S,2,1,"td",8),e.BQk(),e.ynx(11,9),e.YNc(12,R,2,0,"th",7),e.YNc(13,B,2,1,"td",8),e.BQk(),e.ynx(14,10),e.YNc(15,H,2,0,"th",7),e.YNc(16,V,2,1,"td",8),e.BQk(),e.ynx(17,11),e.YNc(18,W,2,0,"th",7),e.YNc(19,G,2,1,"td",8),e.BQk(),e.ynx(20,12),e.YNc(21,j,2,0,"th",7),e.YNc(22,z,2,1,"td",8),e.BQk(),e.ynx(23,13),e.YNc(24,K,2,0,"th",7),e.YNc(25,$,10,0,"td",8),e.BQk(),e.ynx(26,14),e.YNc(27,X,3,1,"th",15),e.BQk(),e.ynx(28,16),e.YNc(29,ee,3,1,"th",15),e.BQk(),e.ynx(30,17),e.YNc(31,te,3,1,"th",15),e.BQk(),e.ynx(32,18),e.YNc(33,ne,1,0,"th",15),e.BQk(),e.ynx(34,19),e.YNc(35,oe,1,0,"th",15),e.BQk(),e.ynx(36,20),e.YNc(37,le,1,0,"th",15),e.BQk(),e.ynx(38,21),e.YNc(39,ie,2,0,"th",22),e.BQk(),e.YNc(40,ae,1,0,"tr",23),e.YNc(41,re,1,0,"tr",23),e.YNc(42,me,1,1,"tr",24),e.YNc(43,pe,1,1,"tr",25),e.YNc(44,se,3,0,"tr",26),e.qZA()(),e.TgZ(45,"div",27),e._UZ(46,"mat-paginator",28),e.qZA()()),2&n&&(e.xp6(7),e.Q6J("dataSource",o.dataSource),e.xp6(33),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matHeaderRowDef",o.displayedFilterColumns),e.xp6(1),e.Q6J("matHeaderRowDef",e.DdM(6,ce)),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(3),e.Q6J("pageSizeOptions",e.DdM(7,ue)))},dependencies:[r.Fj,r.JJ,r.oH,_.KE,U.Nt,g.lW,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.ge,m.ev,m.XQ,m.Gk,m.Ee,A.Hw,q.NW,v.YE,v.nU,k.Ou],styles:[".employee[_ngcontent-%COMP%]{padding:20px 0;background:whitesmoke}.employee__table[_ngcontent-%COMP%]{overflow-x:auto}.employee[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%], .employee[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin:0 auto;width:90%}.employee[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%]{margin-bottom:20px;display:flex;column-gap:20px;align-items:center}.employee[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-transform:capitalize;font-size:16px;font-weight:500}.employee[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:90%}.employee[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:14px}.employee[_ngcontent-%COMP%]     table tr td:nth-child(1), .employee[_ngcontent-%COMP%]     table tr th:nth-child(1){width:20%}.employee[_ngcontent-%COMP%]     table tr td:nth-child(2), .employee[_ngcontent-%COMP%]     table tr th:nth-child(2){width:20%}.employee[_ngcontent-%COMP%]     table tr td:nth-child(3), .employee[_ngcontent-%COMP%]     table tr th:nth-child(3){width:20%}.employee[_ngcontent-%COMP%]     table tr td:nth-child(4), .employee[_ngcontent-%COMP%]     table tr th:nth-child(4){width:10%;text-align:center}.employee[_ngcontent-%COMP%]     table tr td:nth-child(5), .employee[_ngcontent-%COMP%]     table tr th:nth-child(5){width:10%;text-align:center}.employee[_ngcontent-%COMP%]     table tr td:nth-child(6), .employee[_ngcontent-%COMP%]     table tr th:nth-child(6){width:20%;text-align:center}.employee[_ngcontent-%COMP%]     table tr:nth-child(1) th{text-align:center;background-color:#0c134f;color:#fff}.employee[_ngcontent-%COMP%]     table tr:nth-child(2) th:nth-child(1), .employee[_ngcontent-%COMP%]     table tr:nth-child(2) th:nth-child(2), .employee[_ngcontent-%COMP%]     table tr:nth-child(2) th:nth-child(3){text-align:left!important;font-size:14px}.employee[_ngcontent-%COMP%]     table .mat-sort-header-container{justify-content:center!important}.spinner[_ngcontent-%COMP%]{margin:1rem auto}.pagination[_ngcontent-%COMP%]{width:90%;margin:0 auto}.add-button[_ngcontent-%COMP%]{background:#09ba03;color:#fff}.reset-button[_ngcontent-%COMP%]{background:#3f3f3f;color:#fff}.detail-button[_ngcontent-%COMP%]{color:#033aba}.edit-button[_ngcontent-%COMP%]{color:#f4e736}.delete-button[_ngcontent-%COMP%]{color:#f44336}  .yellow-snackbar{background:#f4e736!important;color:#000!important}  .yellow-snackbar button{background-color:#f4e736;color:#000!important;border:none}  .red-snackbar{background:#F44336;color:#fff}  .red-snackbar button{background-color:#f44336;color:#fff!important;border:none}@media (max-width: 1107px){.employee__table[_ngcontent-%COMP%]{width:90%!important;margin:0 auto}.employee[_ngcontent-%COMP%]     table tr td:nth-child(1), .employee[_ngcontent-%COMP%]     table tr th:nth-child(1){width:20%}.employee[_ngcontent-%COMP%]     table tr td:nth-child(2), .employee[_ngcontent-%COMP%]     table tr th:nth-child(2){width:20%}.employee[_ngcontent-%COMP%]     table tr td:nth-child(3), .employee[_ngcontent-%COMP%]     table tr th:nth-child(3){width:20%}.employee[_ngcontent-%COMP%]     table tr td:nth-child(4), .employee[_ngcontent-%COMP%]     table tr th:nth-child(4){min-width:130px!important;text-align:center}.employee[_ngcontent-%COMP%]     table tr td:nth-child(5), .employee[_ngcontent-%COMP%]     table tr th:nth-child(5){min-width:130px!important;text-align:center}.employee[_ngcontent-%COMP%]     table tr td:nth-child(6), .employee[_ngcontent-%COMP%]     table tr th:nth-child(6){min-width:130px!important;text-align:center}}"]}),t})();function _e(t,l){1&t&&(e.TgZ(0,"div",5),e._UZ(1,"mat-spinner",6),e.qZA())}function ge(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"div",7)(1,"div",8)(2,"label"),e._uU(3,"Username"),e.qZA(),e.TgZ(4,"h3"),e._uU(5),e.qZA()(),e.TgZ(6,"div",8)(7,"label"),e._uU(8,"Email"),e.qZA(),e.TgZ(9,"h3"),e._uU(10),e.qZA()(),e.TgZ(11,"div",8)(12,"label"),e._uU(13,"Firstname"),e.qZA(),e.TgZ(14,"h3"),e._uU(15),e.qZA()(),e.TgZ(16,"div",8)(17,"label"),e._uU(18,"Lastname"),e.qZA(),e.TgZ(19,"h3"),e._uU(20),e.qZA()(),e.TgZ(21,"div",8)(22,"label"),e._uU(23,"Birthdate"),e.qZA(),e.TgZ(24,"h3"),e._uU(25),e.ALo(26,"date"),e.qZA()(),e.TgZ(27,"div",8)(28,"label"),e._uU(29,"Basic Salary"),e.qZA(),e.TgZ(30,"h3"),e._uU(31),e.ALo(32,"currency"),e.qZA()(),e.TgZ(33,"div",8)(34,"label"),e._uU(35,"Status"),e.qZA(),e.TgZ(36,"h3"),e._uU(37),e.qZA()(),e.TgZ(38,"div",8)(39,"label"),e._uU(40,"Group"),e.qZA(),e.TgZ(41,"h3"),e._uU(42),e.qZA()(),e.TgZ(43,"div",9)(44,"label"),e._uU(45,"Description"),e.qZA(),e.TgZ(46,"h3"),e._uU(47),e.qZA()(),e.TgZ(48,"div",10)(49,"button",11),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.backToEmployeeList())}),e._uU(50,"OK"),e.qZA()()()}if(2&t){const n=e.oxw();e.xp6(5),e.Oqu(null==n.employeeData?null:n.employeeData.username),e.xp6(5),e.Oqu(null==n.employeeData?null:n.employeeData.email),e.xp6(5),e.Oqu(null==n.employeeData?null:n.employeeData.firstname),e.xp6(5),e.Oqu(null==n.employeeData?null:n.employeeData.lastname),e.xp6(5),e.Oqu(e.xi3(26,9,null==n.employeeData?null:n.employeeData.birthDate,"fullDate")),e.xp6(6),e.Oqu(e.xi3(32,12,null==n.employeeData?null:n.employeeData.basicSalary,"Rp ")),e.xp6(6),e.Oqu(null==n.employeeData?null:n.employeeData.status),e.xp6(5),e.Oqu(null==n.employeeData?null:n.employeeData.group),e.xp6(5),e.Oqu(null==n.employeeData?null:n.employeeData.description)}}let he=(()=>{class t{constructor(n,o,i){this.employeeService=n,this.router=o,this.route=i,this.idEmployee="",this.isWaitingForResponse=!1}ngOnInit(){this.subs=this.route.params.subscribe({next:n=>{console.log(n),n.id&&(this.idEmployee=n.id,this.getEmployee())}})}getEmployee(){this.isWaitingForResponse=!0,this.subs=this.employeeService.getOneEmployee(this.idEmployee).subscribe({next:n=>{n&&(this.isWaitingForResponse=!1,this.employeeData=n)},error:n=>{console.log("Error",n),this.isWaitingForResponse=!1}})}backToEmployeeList(){this.router.navigate(["/employee/list"])}ngOnDestroy(){this.subs.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(O),e.Y36(p.F0),e.Y36(p.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-employee-detail"]],decls:6,vars:3,consts:[[1,"employeee-detail"],[1,"heading"],[1,"card"],["class","spinner-container",4,"ngIf"],["class","grid",4,"ngIf"],[1,"spinner-container"],[1,"spinner"],[1,"grid"],[1,"col-12","md:col-6"],[1,"col-12"],[1,"detail-button"],["mat-flat-button","","color","primary",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"h1",1),e._uU(2),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,_e,2,0,"div",3),e.YNc(5,ge,51,15,"div",4),e.qZA()()),2&n&&(e.xp6(2),e.Oqu("Detail Employee"),e.xp6(2),e.Q6J("ngIf",o.isWaitingForResponse),e.xp6(1),e.Q6J("ngIf",!o.isWaitingForResponse))},dependencies:[u.O5,g.lW,k.Ou,u.H9,u.uU],styles:[".employeee-detail[_ngcontent-%COMP%]{background:whitesmoke;min-height:100vh}.employeee-detail[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{padding-top:20px;text-align:center;font-weight:500}.employeee-detail[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:75%;min-height:200px;margin:20px auto;padding:20px;background:#fff;box-shadow:0 0 5px 5px #d3d3d380;position:relative}.employeee-detail[_ngcontent-%COMP%]   .spinner-container[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}.employeee-detail[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#5e5e5e}.employeee-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:500}.employeee-detail[_ngcontent-%COMP%]   .detail-button[_ngcontent-%COMP%]{text-align:center;width:100%}"]}),t})();var fe=a(8675),ye=a(4004),E=a(9602),w=a(7957),Ce=a(3238),Ze=a(4385);function xe(t,l){1&t&&(e.TgZ(0,"h5"),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.Oqu("Field is requied"))}function be(t,l){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,xe,2,1,"h5",7),e.qZA()),2&t){const n=e.oxw();let o;e.xp6(1),e.Q6J("ngIf",null==(o=n.employeeForm.get("username"))?null:o.hasError("required"))}}function Fe(t,l){1&t&&(e.TgZ(0,"h5"),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.Oqu("Field is requied"))}function Te(t,l){1&t&&(e.TgZ(0,"h5"),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.Oqu("Email is invalid"))}function ve(t,l){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,Fe,2,1,"h5",7),e.YNc(2,Te,2,1,"h5",7),e.qZA()),2&t){const n=e.oxw();let o,i;e.xp6(1),e.Q6J("ngIf",null==(o=n.employeeForm.get("email"))?null:o.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(i=n.employeeForm.get("email"))?null:i.hasError("email"))}}function Oe(t,l){1&t&&(e.TgZ(0,"h5"),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.Oqu("Field is requied"))}function Ee(t,l){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,Oe,2,1,"h5",7),e.qZA()),2&t){const n=e.oxw();let o;e.xp6(1),e.Q6J("ngIf",null==(o=n.employeeForm.get("firstname"))?null:o.hasError("required"))}}function Me(t,l){1&t&&(e.TgZ(0,"h5"),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.Oqu("Field is requied"))}function Ae(t,l){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,Me,2,1,"h5",7),e.qZA()),2&t){const n=e.oxw();let o;e.xp6(1),e.Q6J("ngIf",null==(o=n.employeeForm.get("lastname"))?null:o.hasError("required"))}}function qe(t,l){1&t&&(e.TgZ(0,"h5"),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.Oqu("Field is requied"))}function Pe(t,l){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,qe,2,1,"h5",7),e.qZA()),2&t){const n=e.oxw();let o;e.xp6(1),e.Q6J("ngIf",null==(o=n.employeeForm.get("birthdate"))?null:o.hasError("required"))}}function Ue(t,l){1&t&&(e.TgZ(0,"h5"),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.Oqu("Field is requied"))}function ke(t,l){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,Ue,2,1,"h5",7),e.qZA()),2&t){const n=e.oxw();let o;e.xp6(1),e.Q6J("ngIf",null==(o=n.employeeForm.get("basicSalary"))?null:o.hasError("required"))}}function we(t,l){1&t&&(e.TgZ(0,"h5"),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.Oqu("Field is requied"))}function Ne(t,l){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,we,2,1,"h5",7),e.qZA()),2&t){const n=e.oxw();let o;e.xp6(1),e.Q6J("ngIf",null==(o=n.employeeForm.get("status"))?null:o.hasError("required"))}}function De(t,l){if(1&t&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&t){const n=l.$implicit;e.Q6J("value",n),e.xp6(1),e.hij(" ",n," ")}}function Le(t,l){1&t&&(e.TgZ(0,"h5"),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.Oqu("Field is requied"))}function Je(t,l){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,Le,2,1,"h5",7),e.qZA()),2&t){const n=e.oxw();let o;e.xp6(1),e.Q6J("ngIf",null==(o=n.employeeForm.get("group"))?null:o.hasError("required"))}}function Ye(t,l){1&t&&(e.TgZ(0,"h5"),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.Oqu("Field is requied"))}function Qe(t,l){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,Ye,2,1,"h5",7),e.qZA()),2&t){const n=e.oxw();let o;e.xp6(1),e.Q6J("ngIf",null==(o=n.employeeForm.get("description"))?null:o.hasError("required"))}}const Ie=function(){return["/employee/list"]},Se=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"",component:L,children:[{path:"list",component:de},{path:"form",component:(()=>{class t{constructor(n,o,i){this.fb=n,this.employeeService=o,this._snackBar=i,this.maxDate=new Date,this.groupList=["group 1","group 2","group 3","group 4","group 5","group 6","group 7","group 8","group 9","group 10"]}ngOnInit(){this.initForm(),this.fiteredGroupList=this.employeeForm.get("group")?.valueChanges.pipe((0,fe.O)(""),(0,ye.U)(n=>this.groupList.filter(o=>o.toLowerCase().includes(n))))}initForm(){this.employeeForm=this.fb.group({username:["",r.kI.required],firstname:["",r.kI.required],lastname:["",r.kI.required],email:["",[r.kI.required,r.kI.email]],birthDate:["",r.kI.required],basicSalary:["",r.kI.required],status:["",r.kI.required],group:["",r.kI.required],description:["",r.kI.required]})}submitForm(){this.addEmployee()}addEmployee(){this.employeeService.addEmployee(this.employeeForm.value).subscribe({next:o=>{o&&(this.employeeForm.reset(),this.employeeForm.markAsUntouched(),this.employeeForm.markAsPristine(),console.log("empform",this.employeeForm),this._snackBar.open("Data Added","OK",{duration:5e3,panelClass:["green-snackbar"]}).afterDismissed().subscribe({next:i=>{console.log("VALUE",i)}}))},error:o=>{console.log("Error",o)}})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(r.qu),e.Y36(O),e.Y36(P.ux))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-employee-form"]],decls:75,vars:21,consts:[[1,"container-form"],[1,"form-heading"],[3,"formGroup"],[1,"form-employee","formgrid","grid"],[1,"field","col-12","md:col-6"],["appearance","outline"],["matInput","","placeholder","Username","formControlName","username"],[4,"ngIf"],["matInput","","placeholder","Email","formControlName","email"],["matInput","","placeholder","Firstname","formControlName","firstname"],["matInput","","placeholder","Lastname","formControlName","lastname"],["matInput","","placeholder","Birthdate","formControlName","birthDate",3,"matDatepicker","max","click"],["matSuffix","",3,"for"],["picker",""],["matInput","","placeholder","Basic Salary","type","number","formControlName","basicSalary"],["formControlName","status","panelClass","select-field"],["value","active"],["value","inactive"],["matInput","","placeholder","Group","formControlName","group",3,"matAutocomplete"],["autoActiveFirstOption",""],["autoCompleteGroup","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[1,"field","col-12"],["matInput","","placeholder","Description","formControlName","description","rows","3"],[1,"container-button"],["mat-flat-button","","color","primary","type","button",1,"mr-2",3,"disabled","click"],["mat-flat-button","","color","warn",3,"routerLink"],[3,"value"]],template:function(n,o){if(1&n){const i=e.EpF();e.TgZ(0,"div",0)(1,"h1",1),e._uU(2),e.qZA(),e.TgZ(3,"form",2)(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),e._uU(8,"Username"),e.qZA(),e._UZ(9,"input",6),e.YNc(10,be,2,1,"mat-error",7),e.qZA()(),e.TgZ(11,"div",4)(12,"mat-form-field",5)(13,"mat-label"),e._uU(14,"Email"),e.qZA(),e._UZ(15,"input",8),e.YNc(16,ve,3,2,"mat-error",7),e.qZA()(),e.TgZ(17,"div",4)(18,"mat-form-field",5)(19,"mat-label"),e._uU(20,"Firstname"),e.qZA(),e._UZ(21,"input",9),e.YNc(22,Ee,2,1,"mat-error",7),e.qZA()(),e.TgZ(23,"div",4)(24,"mat-form-field",5)(25,"mat-label"),e._uU(26,"Lastname"),e.qZA(),e._UZ(27,"input",10),e.YNc(28,Ae,2,1,"mat-error",7),e.qZA()(),e.TgZ(29,"div",4)(30,"mat-form-field",5)(31,"mat-label"),e._uU(32,"Birthdate"),e.qZA(),e.TgZ(33,"input",11),e.NdJ("click",function(){e.CHM(i);const s=e.MAs(36);return e.KtG(s.open())}),e.qZA(),e._UZ(34,"mat-datepicker-toggle",12)(35,"mat-datepicker",null,13),e.YNc(37,Pe,2,1,"mat-error",7),e.qZA()(),e.TgZ(38,"div",4)(39,"mat-form-field",5)(40,"mat-label"),e._uU(41,"Basic Salary"),e.qZA(),e._UZ(42,"input",14),e.YNc(43,ke,2,1,"mat-error",7),e.qZA()(),e.TgZ(44,"div",4)(45,"mat-form-field",5)(46,"mat-label"),e._uU(47,"Status"),e.qZA(),e.TgZ(48,"mat-select",15)(49,"mat-option",16),e._uU(50,"Active"),e.qZA(),e.TgZ(51,"mat-option",17),e._uU(52,"Inactive"),e.qZA()(),e.YNc(53,Ne,2,1,"mat-error",7),e.qZA()(),e.TgZ(54,"div",4)(55,"mat-form-field",5)(56,"mat-label"),e._uU(57,"Group"),e.qZA(),e._UZ(58,"input",18),e.TgZ(59,"mat-autocomplete",19,20),e.YNc(61,De,2,2,"mat-option",21),e.ALo(62,"async"),e.qZA(),e.YNc(63,Je,2,1,"mat-error",7),e.qZA()(),e.TgZ(64,"div",22)(65,"mat-form-field",5)(66,"mat-label"),e._uU(67,"Description"),e.qZA(),e._UZ(68,"textarea",23),e.YNc(69,Qe,2,1,"mat-error",7),e.qZA()()(),e.TgZ(70,"div",24)(71,"button",25),e.NdJ("click",function(){return o.submitForm()}),e._uU(72,"Save"),e.qZA(),e.TgZ(73,"button",26),e._uU(74,"Cancel"),e.qZA()()()()}if(2&n){const i=e.MAs(36),c=e.MAs(60);let s,d,h,f,y,C,Z,x,b;e.xp6(2),e.Oqu("Add Employee"),e.xp6(1),e.Q6J("formGroup",o.employeeForm),e.xp6(7),e.Q6J("ngIf",(null==(s=o.employeeForm.get("username"))?null:s.touched)||(null==(s=o.employeeForm.get("username"))?null:s.dirty)),e.xp6(6),e.Q6J("ngIf",(null==(d=o.employeeForm.get("email"))?null:d.touched)||(null==(d=o.employeeForm.get("email"))?null:d.dirty)),e.xp6(6),e.Q6J("ngIf",(null==(h=o.employeeForm.get("firstname"))?null:h.touched)||(null==(h=o.employeeForm.get("firstname"))?null:h.dirty)),e.xp6(6),e.Q6J("ngIf",(null==(f=o.employeeForm.get("lastname"))?null:f.touched)||(null==(f=o.employeeForm.get("lastname"))?null:f.dirty)),e.xp6(5),e.Q6J("matDatepicker",i)("max",o.maxDate),e.xp6(1),e.Q6J("for",i),e.xp6(3),e.Q6J("ngIf",(null==(y=o.employeeForm.get("birthdate"))?null:y.touched)||(null==(y=o.employeeForm.get("birthdate"))?null:y.dirty)),e.xp6(6),e.Q6J("ngIf",(null==(C=o.employeeForm.get("basicSalary"))?null:C.touched)||(null==(C=o.employeeForm.get("basicSalary"))?null:C.dirty)),e.xp6(10),e.Q6J("ngIf",(null==(Z=o.employeeForm.get("status"))?null:Z.touched)||(null==(Z=o.employeeForm.get("status"))?null:Z.dirty)),e.xp6(5),e.Q6J("matAutocomplete",c),e.xp6(3),e.Q6J("ngForOf",e.lcZ(62,18,o.fiteredGroupList)),e.xp6(2),e.Q6J("ngIf",(null==(x=o.employeeForm.get("group"))?null:x.touched)||(null==(x=o.employeeForm.get("group"))?null:x.dirty)),e.xp6(6),e.Q6J("ngIf",(null==(b=o.employeeForm.get("description"))?null:b.touched)||(null==(b=o.employeeForm.get("description"))?null:b.dirty)),e.xp6(2),e.Q6J("disabled",o.employeeForm.invalid),e.xp6(2),e.Q6J("routerLink",e.DdM(20,Ie))}},dependencies:[u.sg,u.O5,p.rH,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,_.TO,_.KE,_.hX,_.R9,U.Nt,g.lW,E.Mq,E.hl,E.nW,w.XC,w.ZL,Ce.ey,Ze.gD,u.Ov],styles:[".container-form[_ngcontent-%COMP%]{width:90%;margin:20px auto}.form-heading[_ngcontent-%COMP%]{text-align:center;font-weight:500}mat-form-field[_ngcontent-%COMP%]{width:100%}  .select-field{margin-top:45px!important}textarea[_ngcontent-%COMP%]{resize:none}  .green-snackbar{background:#29af18;color:#fff}  .green-snackbar button{background-color:#29af18;color:#fff!important;border:none}"]}),t})()},{path:":id",component:he}]},{path:"**",redirectTo:"list"}];let Re=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(Se),p.Bz]}),t})(),Be=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,Re]}),t})()}}]);