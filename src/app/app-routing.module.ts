import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { ShopModule } from './shop/shop.module';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path:'**',component:PageNotFoundComponent}
];

@NgModule({
	imports: [
		HomeModule,
		ProductsModule,
		ShopModule,
		RouterModule.forRoot(routes),
		CommonModule
	],
	declarations:[
					PageNotFoundComponent
				],
	exports: [RouterModule]
})

export class AppRoutingModule { }
