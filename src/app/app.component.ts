import { Component,OnInit } from '@angular/core';
import '../public/scss/styles.scss';
import { PermissionService } from 'angular2-permission/src/services/permission.service';


@Component({
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
	
})
export class AppComponent implements OnInit{ 
	appName = 'Setting up Angular 4 Webpack 3 Application'; 
	constructor(private _permissionService: PermissionService){
		this._permissionService.define(['CREATE_DISBMT_WORKFLOW', 
			'EDIT_DISBMT_WORKFLOW', 'EDIT_UPLOAD_PHOTO_DISBMT_WORKFLOW', 
			'EDIT_UPLOAD_CONFIRMED_DISBMT_WORKFLOW', 'EDIT_VERIFIED_DISBMT_WORKFLOW', 
			'VIEW_DISBMT_WORKFLOW', 'DELETE_DISBMT_WORKFLOW']);
	}
	ngOnInit(){
		
	}
}
