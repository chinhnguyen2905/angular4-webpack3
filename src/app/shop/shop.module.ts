import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopService } from './shop.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PopupWeatherComponent } from './weather-popup/weather-popup.component';

const routesConfig: Routes = [
	{ path:'shop', component: ShopComponent }
];

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoadingModule,
        MaterialModule,
        FlexLayoutModule,
        RouterModule.forChild(routesConfig)
    ],
    declarations:[
        ShopComponent,
        PopupWeatherComponent
    ],
    entryComponents:[PopupWeatherComponent],
    providers:[ShopService]
})

export class ShopModule { }