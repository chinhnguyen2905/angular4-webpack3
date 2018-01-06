import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopService } from './shop.service';
import { FormsModule } from '@angular/forms';

const routesConfig: Routes = [
	{ path:'shop', component: ShopComponent }
];

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routesConfig)
    ],
    declarations:[
        ShopComponent
    ],
    providers:[ShopService]
})

export class ShopModule { }