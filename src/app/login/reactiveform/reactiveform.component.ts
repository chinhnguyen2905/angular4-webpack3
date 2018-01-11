import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../../authguard/auth.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
	selector: 'reactiveform-app',
	templateUrl: 'reactiveform.component.html',
    styleUrls: ['reactiveform.component.scss'],
    providers:[]
})
export class ReactiveComponent implements OnInit{
    formSignin: FormGroup;
     constructor(private fb:FormBuilder,public authService: AuthService, public router: Router){
         
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
         //check form if valid -> call service
        if(this.formSignin.valid){
            //call service........
        //    this.authService.setLogined(true); //call successfully, set true to isLogin

            ///---- for test
            this.authService.login().subscribe(() => {
                console.log("try to login........");
                if (this.authService.isLoggedIn) {
                  // Get the redirect URL from our auth service
                  // If no redirect has been set, use the default
                  let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/examples';
          
                  // Set our navigation extras object
                  // that passes on our global query params and fragment
                  let navigationExtras: NavigationExtras = {
                    queryParamsHandling: 'preserve',
                    preserveFragment: true
                  };
          
                  // Redirect the user
                  this.router.navigate([redirect], navigationExtras);
                }
            });
        }
     }

     logout() {
        this.authService.logout();
      }

     emailValidate(formControl:FormControl){
         if(formControl.value.includes('@gmail.com')){
             return null;
         }
         return {gmail:true}
     }
     getErrorMessage() {
        return (this.formSignin.controls.email && this.formSignin.controls.email.errors&& this.formSignin.controls.email.errors.email) ? 'You must enter a value' :
       (this.formSignin.controls.email&& this.formSignin.controls.email.invalid) ? 'Not a valid email' : '';
      }
}