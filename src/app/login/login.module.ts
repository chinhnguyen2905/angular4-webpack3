import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveComponent } from './reactiveform/reactiveform.component';
import { LoginComponent } from './login.conponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuard } from '../authguard/auth-guard.service';
import { AuthService } from '../authguard/auth.service';



@NgModule({
	imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        FlexLayoutModule,
        MaterialModule
    ],
    declarations:[
        ReactiveComponent,
        LoginComponent
    ],
    providers:[
        AuthGuard,
        AuthService
    ]
})

export class LoginModule { }