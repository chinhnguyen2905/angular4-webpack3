import { Component,OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { CheckboxTableService } from './checkbox-table.service';
import { SelectionModel } from '@angular/cdk/collections';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ElementRef } from '@angular/core';
import { UserDatabase } from './user-database';
import { Observable } from 'rxjs/Observable';
import { CheckBoxTableDataSource } from './usertable-datasource';
import { ChangeDetectorRef } from '@angular/core';

@Component({
	selector: 'checkbox-table-app',
	templateUrl: 'checkbox-table.component.html',
    styleUrls: ['checkbox-table.component.scss'],
    providers:[CheckboxTableService],
	encapsulation: ViewEncapsulation.None
})
export class CheckBoxTableComponent implements OnInit {
    displayedColumns = ['select', 'name', 'position', 'weight','symbol'];
    userDatabase = new UserDatabase();
    selection = new SelectionModel<string>(true, []);
    dataSource: CheckBoxTableDataSource | null;
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('filter') filter: ElementRef;

    constructor(private tableService: CheckboxTableService,private _cdr: ChangeDetectorRef){
    }
    ngOnInit(){
        this.dataSource = new CheckBoxTableDataSource(this.userDatabase, this.paginator, this.sort);
        Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(() => {
                if (!this.dataSource) { return; }
                this.dataSource.filter = this.filter.nativeElement.value;
            });
    }
    isAllSelected(): boolean {
        if (!this.dataSource) { return false; }
        if (this.selection.isEmpty()) { return false; }
    
        if (this.filter.nativeElement.value) {
          return this.selection.selected.length == this.dataSource.renderedData.length;
        } else {
          return this.selection.selected.length == this.userDatabase.data.length;
        }
      }
    
      masterToggle() {
        if (!this.dataSource) { return; }
    
        if (this.isAllSelected()) {
          this.selection.clear();
        } else if (this.filter.nativeElement.value) {
          this.dataSource.renderedData.forEach(data => this.selection.select(data.name));
        } else {
          this.userDatabase.data.forEach(data => this.selection.select(data.name));
        }
      }

      ngAfterViewInit() {
        this._cdr.detectChanges();
      }
}
