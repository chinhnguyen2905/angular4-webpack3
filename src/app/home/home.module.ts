import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

//const routesConfig: Routes = [

//];

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule,
       // RouterModule.forChild(routesConfig)
    ],
    declarations:[
    ]
})

export class HomeModule { }