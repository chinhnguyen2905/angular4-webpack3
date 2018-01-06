import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
	selector: 'login-app',
	templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    providers:[LoginService]
})
export class LoginComponent implements OnInit{
    messageError ="";
     constructor(private loginService:LoginService){}
     ngOnInit(){
         
     }
     onSubmit(formSignin:NgForm){
        //send from data to service
        if(formSignin.valid){
            this.loginService.sendPost(formSignin.value)
            .then(result => console.log(result))
            .catch(err=> console.log(err));
       }
       
     }

     checkValidate(formSignin:NgForm){
        if(formSignin.controls.email && formSignin.controls.email.touched && formSignin.controls.email.errors && formSignin.controls.email.errors.required){
            this.messageError = "Email is required!";
            return true;
        }else if(formSignin.controls.email && formSignin.controls.email.touched && formSignin.controls.email.invalid){
            this.messageError = "Email is invalid!";
            return true;
        }else{
            return false;
        }
     }
  
}
