import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const routesConfig: Routes = [
	{ path:'products', component: ProductsComponent }
];

@NgModule({
	imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        RouterModule.forChild(routesConfig)
    ],
    declarations:[
        ProductsComponent
    ]
})

export class ProductsModule { }