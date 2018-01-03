import { AppConfig } from './app.config';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
/*App component*/ 
import { NavComponent} from './nav/nav.component';

import { format } from 'url';


@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
	],
	declarations: [ AppComponent,NavComponent],
	providers: [{ provide: AppConfig, useValue: process.env.APP_CONFIG }, { provide: APP_BASE_HREF, useValue: '/' }],
	bootstrap: [AppComponent]
})
export class AppModule { }
