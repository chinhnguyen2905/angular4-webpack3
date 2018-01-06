import { Component,OnInit} from '@angular/core';
import { ShopService } from './shop.service';

@Component({
	selector: 'shop',
	templateUrl: 'shop.component.html',
	styleUrls: ['shop.component.scss'],
	providers:[ShopService]
})
export class ShopComponent implements OnInit{
	temperature = "";
	cityname ="";
	cityNameText = "";
    constructor(private shopService:ShopService){

	}
	ngOnInit(){
		
	}

	getWeather(){
		this.shopService.getTemp(this.cityNameText)
		.then(temp=> {
			this.temperature = temp;
			this.cityname = this.cityNameText;
			console.log(this.temperature);
		})
		.catch(err=> console.log(err));
	}
}
