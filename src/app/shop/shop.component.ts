import { Component,OnInit,ViewChild} from '@angular/core';
import { ShopService } from './shop.service';
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
    constructor(private shopService:ShopService){

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
			this.cityname ="";
			//this.isShowPopup =  true;
			this.showPopup();
			this.loading = false;
		});
		
	}

	showPopup(){
		
		/*this.popupError.options = {
			header: "Message",
			color: "blue", // red, blue.... 
			widthProsentage: 20, // The with of the popou measured by browser width 
			animationDuration: 1, // in seconds, 0 = no animation 
			showButtons: false, // You can hide this in case you want to use custom buttons 
			confirmBtnContent: "OK", // The text on your confirm button 
			cancleBtnContent: "Cancel", // the text on your cancel button 
			confirmBtnClass: "btn btn-info", // your class for styling the confirm button 
			cancleBtnClass: "btn btn-danger", // you class for styling the cancel button 
			animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
		};
			this.popupError.show(this.popupError.options);
			console.log(this.popupError.options);*/
	}
	closePopup(){
		//this.popupError.hide();
	}
}
