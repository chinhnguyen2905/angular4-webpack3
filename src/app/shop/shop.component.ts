import { Component,OnInit,ViewChild} from '@angular/core';
import { ShopService } from './shop.service';
import { MatDialog } from '@angular/material';
import { PopupWeatherComponent } from './weather-popup/weather-popup.component';
//import { Popup } from 'ng2-opd-popup';

@Component({
	selector: 'shop',
	templateUrl: 'shop.component.html',
	styleUrls: ['shop.component.scss'],
	providers:[ShopService]
})
export class ShopComponent implements OnInit{
	loading = false;
	temperature = "";
	cityname ="";
	cityNameText = "";
	isShowPopup = false;
    constructor(private shopService:ShopService,public dialog: MatDialog){

	}
//	@ViewChild('popupError') popupError: Popup;
	ngOnInit(){
		
	}

	getWeather(){
		this.loading = true;
		this.shopService.getTemp(this.cityNameText)
		.then(temp=> {
			this.temperature = temp;
			this.cityname = this.cityNameText;
			console.log(this.temperature);
			this.loading = false;
		})
		.catch(err=> {
			console.log(err);
			this.showPopup();
			this.loading = false;
		});
		
	}

	showPopup(){
		let dialogRef = this.dialog.open(PopupWeatherComponent,{
            data:{
                message:'City is not found! Please input a right city'
            },
			width: '300px',
			height: '250px',
            backdropClass:"weather"
        })
        console.log(dialogRef );
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`); 
		   // this.result = result;
		   this.cityNameText ="";
        });
	}
}
