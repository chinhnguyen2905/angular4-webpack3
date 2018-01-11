import { Component,OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ELEMENT_DATA } from './data-table';
import { ViewChild } from '@angular/core';


@Component({
	selector: 'data-table-app',
	templateUrl: 'data-table.component.html',
	styleUrls: ['data-table.component.scss']
	
})
export class DataTableComponent implements OnInit  {
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
     constructor(){

	 }
	 ngOnInit(){

     }
     applyFilter(filterValue:string){
         filterValue = filterValue.trim();//remove  whitespace
         filterValue = filterValue.toLowerCase();//change to uppercase
         this.dataSource.filter = filterValue;

     }

     ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort= this.sort;
    }
}
