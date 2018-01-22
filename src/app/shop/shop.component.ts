import { Component,OnInit,ViewChild} from '@angular/core';
import { ShopService } from './shop.service';
import { MatDialog } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PopupWeatherComponent } from './weather-popup/weather-popup.component';
import { slideInDownAnimation } from '../animation';
import { HostBinding } from '@angular/core';


@Component({
	selector: 'shop',
	templateUrl: 'shop.component.html',
	styleUrls: ['shop.component.scss'],
	providers:[ShopService],
	animations: [ slideInDownAnimation ]
})
export class ShopComponent implements OnInit{
	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display')   display = 'block';
	@HostBinding('style.position')  position = 'absolute';

	loading = false;
	isShowSpinner = false;
	temperature = "";
	cityname ="";
	cityNameText = "";
	isShowPopup = false;

	//for form 
	selectedValue: string;
	foods = [
		{value: 'steak-0', viewValue: 'Steak'},
		{value: 'pizza-1', viewValue: 'Pizza'},
		{value: 'tacos-2', viewValue: 'Tacos'}
	];
	firstForm: FormGroup;
	/////////////////////////////////

    constructor(private fb:FormBuilder,private shopService:ShopService,public dialog: MatDialog){

	}
	ngOnInit(){
		this.firstForm = this.fb.group({
            email : ["", Validators.email],
			name: ["",Validators.required],
			address: ["",Validators.required],
			selectedFood: ""
        })  
	}

	//get weather for no need authenticate(token) user (using  Http)
	getWeather(){
		this.loading = true;
		this.shopService.getTemp1(this.cityNameText)
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

	//get ResApi with authenticate(need to have a token in headers when getting data through api) user (using HttpClient)
	getAPI(){
		this.isShowSpinner = true;
		this.shopService.getTemp2()
		.subscribe(
			(data) => {
				console.log(data);
				this.loading = false;
				this.isShowSpinner = false;
			},
			err=> {
				console.log(err);
				this.loading = false;
			})
	
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


	submitForm(){
		
		if(this.firstForm.valid){
			console.log(this.firstForm);
		}
	}

	getErrorMessage() {
      //  return (this.firstForm.controls.email && this.firstForm.controls.email.errors&& this.firstForm.controls.email.errors.email) ? 'You must enter a value' :
	 //  (this.firstForm.controls.email&& this.firstForm.controls.email.invalid) ? 'Not a valid email' : '';
	 
	 return this.firstForm.controls.email.hasError('required') ? 'You must enter a value' :
	 this.firstForm.controls.email.hasError('email') ? 'Not a valid email' : '';
	  }
	  
	  
}
