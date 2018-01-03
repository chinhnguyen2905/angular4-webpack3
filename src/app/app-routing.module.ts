import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{path:'home',component:HomeComponent},
	{ path: 'shop', component:ShopComponent},
	{ path: 'products', component:ProductsComponent},
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{path:'**',component:PageNotFoundComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
