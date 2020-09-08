import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Injectable,Input} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';
import {ExcelService} from './excel.service';
import { GridOptions, RowNode } from '@ag-grid-community/all-modules';
import {MatSnackBar} from '@angular/material/snack-bar'







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public gridOptions: GridOptions;
  @Input()   counter: number;

  constructor(private excelService:ExcelService,private _snackBar: MatSnackBar) {
    this.gridOptions = <GridOptions>{
      enableSorting: true,
      enableFilter: true
    };
  }
  

  ngOnInit(){
    
    this.gridOptions = <GridOptions>{
       onGridReady: () => {
         
            this.gridOptions.api.sizeColumnsToFit();
            this.counter=this.gridOptions.api.getDisplayedRowCount();
            this.gridOptions.defaultColDef.filter=true
            
        }
    };
}

  columnDefs = [
    {headerName: 'Id', field: 'id', sortable: true,filter:true,resizable: true},
    {headerName: 'Employee Name', field: 'employee', sortable: true,filter:true,resizable: true},
    {headerName: 'Dev Lableader', field: 'devleader', sortable: true,filter:true,resizable: true},
    {headerName: 'Group Leader', field: 'groupleader', sortable: true,filter:true,resizable: true},
    {headerName: 'Project Leader', field: 'projectleader', sortable: true,filter:true,resizable: true},
    {headerName: 'Project', field: 'project', sortable: true,filter:true,resizable: true},
    {headerName: 'Project', field: 'Designation', sortable: true,filter:true,resizable: true}
];


rowData = [
    { id: '100', employee: 'John', Designation:'Developer',devleader: 'Yogeshwari', groupleader :'Pradeep',projectleader:'RajMohan',project:'AC'},
    { id: '200', employee: 'Michael',Designation:'Developer',devleader: 'Yogeshwari', groupleader:'Pradeep',projectleader:'RajMohan',project:'AC'},
    { id: '300', employee: 'Kumar',Designation:'Developer', devleader: 'Yogeshwari', groupleader :'Pradeep',projectleader:'RajMohan',project:'AC'},
    { id: '400', employee: 'Trump', Designation:'Developer',devleader: 'Yogeshwari', groupleader :'Pradeep',projectleader:'RajMohan',project:'AC'},
    { id: '500', employee: 'Lawson',Designation:'Developer', devleader: 'Yogeshwari', groupleader :'Pradeep',projectleader:'RajMohan',project:'AC'},
    { id: '600', employee: 'Jack', Designation:'Developer',devleader: 'Yogeshwari', groupleader :'Pradeep',projectleader:'RajMohan',project:'AC'}

];

onFilterTextBoxChanged(event) {
  this.gridOptions.api.setQuickFilter(event.target.value);
  this.counter=this.gridOptions.api.getDisplayedRowCount();
}

exportAsXLSX():void {
  let filteredList:any=[];
  this.counter=this.gridOptions.api.getDisplayedRowCount();
for(let i=0;i<this.counter;i++){
 filteredList.push(this.gridOptions.api.getDisplayedRowAtIndex(i).data );
}
this._snackBar.open("The File is downloading now", "", {
  duration: 2000,
  verticalPosition: 'bottom', 
  horizontalPosition: 'left'
});
  this.excelService.exportAsExcelFile(filteredList, 'Employee Details');
}

onHeaderClick(event){
  this.counter=this.gridOptions.api.getDisplayedRowCount();
  console.log(event);
}
}