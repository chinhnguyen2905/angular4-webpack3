import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';

const routesConfig: Routes = [
	{ path:'shop', component: ShopComponent }
];

@NgModule({
	imports: [
        CommonModule,
        RouterModule.forChild(routesConfig)
    ],
    declarations:[
        ShopComponent
    ]
})

export class ShopModule { }