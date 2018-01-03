import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';

const routesConfig: Routes = [
	{ path:'products', component: ProductsComponent }
];

@NgModule({
	imports: [
        CommonModule,
        RouterModule.forChild(routesConfig)
    ],
    declarations:[
        ProductsComponent
    ]
})

export class ProductsModule { }