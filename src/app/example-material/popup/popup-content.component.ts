import { Component,OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
    selector: 'popup-content-app',
	templateUrl: 'popup-content.component.html',
	styleUrls: ['popup-content.component.scss']
  })
  export class PopupContentComponent implements OnInit{
  
    constructor(
      public dialogRef: MatDialogRef<PopupContentComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {

       }

        ngOnInit(){
            
         }
         closeConfirm(){
            this.dialogRef.close("confirm!!");
         }
         closeCancel(){
            this.dialogRef.close("cancel!!");
        }

  
  }
