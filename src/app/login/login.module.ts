import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveComponent } from './reactiveform/reactiveform.component';
import { LoginComponent } from './login.conponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
	imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations:[
        ReactiveComponent,
        LoginComponent
    ]
})

export class LoginModule { }