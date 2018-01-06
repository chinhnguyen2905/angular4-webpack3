import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { ShopModule } from './shop/shop.module';
import { LoginComponent } from './login/login.conponent';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', loadChildren:'./home/home.module#HomeModule'},
	{ path:'login', component: LoginComponent},
	{ path:'**',component:PageNotFoundComponent}
];

@NgModule({
	imports: [
		HomeModule,
		ProductsModule,
		FormsModule,
		ShopModule,
		RouterModule.forRoot(routes),
		CommonModule
	],
	declarations:[
					PageNotFoundComponent,
					LoginComponent
				],
	exports: [RouterModule]
})

export class AppRoutingModule { }
