import { Component,OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
	selector: 'weather-popup-app',
	templateUrl: 'weather-popup.component.html',
	styleUrls: ['weather-popup.component.scss']
})
export class PopupWeatherComponent implements OnInit{
     constructor(public dialogRef: MatDialogRef<PopupWeatherComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any){
	 }
	 ngOnInit(){

	 }

	 closePopup(){
		this.dialogRef.close("cancel!!");
	}

}
