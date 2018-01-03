import { AppConfig } from './app.config';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

import { NavComponent} from './nav/nav.component';
import {ShopComponent} from './shop/shop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';

import { format } from 'url';


@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
	],
	declarations: [ AppComponent,
					NavComponent,
					ShopComponent,
					PageNotFoundComponent,
					ProductsComponent,
					HomeComponent],
	providers: [{ provide: AppConfig, useValue: process.env.APP_CONFIG }, { provide: APP_BASE_HREF, useValue: '/' }],
	bootstrap: [AppComponent]
})
export class AppModule { }
