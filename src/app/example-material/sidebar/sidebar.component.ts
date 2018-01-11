import { Component,ViewEncapsulation,OnInit } from '@angular/core';
import { MatSlideToggle } from '@angular/material';

@Component({
	selector: 'sidebar-app',
	templateUrl: 'sidebar.component.html',
	styleUrls: ['sidebar.component.scss']
	
})
export class SidebarComponent implements OnInit  {
	opened  = true;
     constructor(){

	 }
	 ngOnInit(){

	 }
	 getValue(el:MatSlideToggle){
		console.log(el.checked)
	 }
}
