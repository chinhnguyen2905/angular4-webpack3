import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopService } from './shop.service';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
//import { PopupModule } from 'ng2-opd-popup/components/popup/popup.module';

const routesConfig: Routes = [
	{ path:'shop', component: ShopComponent }
];

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
        LoadingModule,
       // PopupModule,
        RouterModule.forChild(routesConfig)
    ],
    declarations:[
        ShopComponent
    ],
    providers:[ShopService]
})

export class ShopModule { }