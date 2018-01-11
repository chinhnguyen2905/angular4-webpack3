import { Component,OnInit, Inject } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PopupContentComponent } from './popup-content.component';

@Component({
	selector: 'popup-app',
	templateUrl: 'popup.component.html',
    styleUrls: ['popup.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PopupComponent {
    result="";
     constructor(public dialog: MatDialog){

     }
     ngOnInit(){

    }
    openDialog(){
        let dialogRef = this.dialog.open(PopupContentComponent,{
            data:{
                animal:'panda'
            },
            height: '300px',
            width: '500px',
            panelClass:"popup-container"
        })
        console.log(dialogRef );
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`); 
            this.result = result;
        });
    }

}
