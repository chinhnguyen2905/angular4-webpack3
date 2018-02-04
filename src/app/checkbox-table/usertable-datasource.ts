import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { MatPaginator, MatSort } from "@angular/material";
import { Observable } from "rxjs/Observable";
import { UserDatabase } from "./user-database";
import { User } from "./user";

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class CheckBoxTableDataSource extends DataSource<any> {
    _filterChange = new BehaviorSubject('');
    get filter(): string { return this._filterChange.value; }
    set filter(filter: string) { this._filterChange.next(filter); }
  
    filteredData: User[] = [];
    renderedData: User[] = [];
  
    constructor(private _userDatabase: UserDatabase,
                private _paginator: MatPaginator,
                private _sort: MatSort) {
      super();
  
      // Reset to the first page when the user changes the filter.
      this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
    }
  
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<User[]> {
      // Listen for any changes in the base data, sorting, filtering, or pagination
      const displayDataChanges = [
        this._userDatabase.dataChange,
        this._sort.sortChange,
        this._filterChange,
        this._paginator.page,
      ];
  
      return Observable.merge(...displayDataChanges).map(() => {
        // Filter data
        this.filteredData = this._userDatabase.data.slice().filter((item: User) => {
          let searchStr = (item.name).toLowerCase();
          return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        });
  
       // Sort filtered data
       const sortedData = this.sortData(this.filteredData.slice());
  
        //Grab the page's slice of the filtered sorted data.
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
       return this.renderedData;
      });
    }
  
    disconnect() {}
  
    /** Returns a sorted copy of the database data. */
    sortData(data: User[]): User[] {
      if (!this._sort.active || this._sort.direction == '') { return data; }
  
      return data.sort((a, b) => {
        let propertyA: number|string = '';
        let propertyB: number|string = '';
  
        switch (this._sort.active) {
          case 'name': [propertyA, propertyB] = [a.name, b.name]; break;
          case 'position': [propertyA, propertyB] = [a.position, b.position]; break;
          case 'weight': [propertyA, propertyB] = [a.weight, b.weight]; break;
          case 'symbol': [propertyA, propertyB] = [a.symbol, b.symbol]; break;
        }
  
        let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
        let valueB = isNaN(+propertyB) ? propertyB : +propertyB;
  
        return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
      });
    }
  }