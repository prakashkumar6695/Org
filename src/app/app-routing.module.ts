import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeProfileComponent } from './employeeprofile/employee-profile/employee-profile.component';

const routes: Routes = [
 { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: AppComponent },
  { path: 'user', component: EmployeeProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
