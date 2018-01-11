import { Component,ViewEncapsulation,OnInit } from '@angular/core';


@Component({
	selector: 'toolbar-app',
	templateUrl: 'toolbar.component.html',
	styleUrls: ['toolbar.component.scss']
	
})
export class ToolbarComponent implements OnInit  {
     constructor(){

	 }
	 ngOnInit(){

	 }
     callFunc(){
         console.log("abc");
     }
}
