import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module'
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AgGridModule } from 'ag-grid-angular';
import {ExcelService} from './excel.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeProfileComponent } from './employeeprofile/employee-profile/employee-profile.component';
import { IndexoutletComponent } from './indexoutlet/indexoutlet.component';






@NgModule({
  declarations: [
    AppComponent,
    EmployeeProfileComponent,
    IndexoutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    AgGridModule.withComponents(null),
    ReactiveFormsModule
  ],
  exports:[AppRoutingModule],
  providers: [ExcelService],
  bootstrap: [IndexoutletComponent]
})
export class AppModule { }
