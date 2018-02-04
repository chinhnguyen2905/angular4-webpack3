import { Component,OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RESPONSIBILITY_DATA, Responsibility } from './responsibility-data';
import { MatChipInputEvent } from '@angular/material';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar/dist/lib/perfect-scrollbar.interfaces';

@Component({
	selector: 'userrole-reponsibility-app',
	templateUrl: 'userrole-reponsibility.component.html',
    styleUrls: ['userrole-reponsibility.component.scss'],
    providers:[],
	encapsulation: ViewEncapsulation.None
})
export class UserRoleResponsibilityComponent implements OnInit {
    formResponsibility: FormGroup;

    resList:Responsibility[] = []
    valueRes ="";

    config : PerfectScrollbarConfigInterface = {  
        suppressScrollX: true 
      };  
    constructor(private fb:FormBuilder){
       

    }

    ngOnInit(){
        this.resList = RESPONSIBILITY_DATA;
        this.formResponsibility = this.fb.group({
            roleName : ["",Validators.required],
           
        });
    }

    clickResItem(item:Responsibility){
        //this.chipList.push(item);
        //console.log(item)
    }

    onChange(itemSearch:Responsibility, value:any) {
      console.log(value);
      itemSearch.isActive = value.checked;
    }

    setResListStatuss(){
       
    }
    
    remove(chip: any): void {
        // let index = this.chipList.indexOf(chip);
        //  if (index >= 0) {
        //      this.chipList.splice(index, 1);
        //  }
        
        chip.isActive = false;
    }

    updateChip(value:any){
        console.log(value)
    }

}
