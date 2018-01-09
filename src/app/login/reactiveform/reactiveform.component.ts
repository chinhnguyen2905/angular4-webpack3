import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
	selector: 'reactiveform-app',
	templateUrl: 'reactiveform.component.html',
    styleUrls: [],
    providers:[]
})
export class ReactiveComponent implements OnInit{
    formSignin: FormGroup;
     constructor(private fb:FormBuilder){
         
     }
     ngOnInit(){
        this.formSignin = this.fb.group({
            email : ["",this.emailValidate],
            password: ["",Validators.minLength(6)],
            subjects: this.fb.group({
                nodeJS : false,
                angularJS:true,
                createJS:false
            })     
        })  
     }
     onSubmit(){
        console.log(this.formSignin.value);
     }

     emailValidate(formControl:FormControl){
         if(formControl.value.includes('@gmail.com')){
             return null;
         }
         return {gmail:true}
     }
}