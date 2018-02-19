import { Injectable } from "@angular/core";
import { PermissionService } from "angular2-permission/src/services/permission.service";


@Injectable()

export class RolePermissionService {
    constructor(private _permissionService: PermissionService){
        this._permissionService.define(['CREATE_USER','EDIT_USER','DELETE_USER','CREATE_DISBMT_WORKFLOW', 
        'EDIT_DISBMT_WORKFLOW', 'EDIT_UPLOAD_PHOTO_DISBMT_WORKFLOW', 
        'EDIT_UPLOAD_CONFIRMED_DISBMT_WORKFLOW', 'EDIT_VERIFIED_DISBMT_WORKFLOW', 
        'VIEW_DISBMT_WORKFLOW', 'DELETE_DISBMT_WORKFLOW']);

    }
}