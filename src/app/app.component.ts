import { Component,OnInit } from '@angular/core';
import '../public/scss/styles.scss';


@Component({
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
	
})
export class AppComponent implements OnInit{ 
	appName = 'Setting up Angular 4 Webpack 3 Application'; 
	constructor(){};
	ngOnInit(){
		
	}
}
