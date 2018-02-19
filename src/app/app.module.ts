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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpModule } from '@angular/http';
import { LoadingModule } from 'ngx-loading';
import { ANIMATION_TYPES } from 'ngx-loading';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { PopupComponent } from './example-material/popup/popup.component';
import { MaterialModule } from './material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './authguard/auth.interceptor';
import { RequestInterceptorService } from './authguard/request-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { Ng2Permission } from 'angular2-permission';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		MaterialModule,
		AppRoutingModule,
		HttpClientModule,
		Ng2Permission,
		LoadingModule.forRoot({
			animationType: ANIMATION_TYPES.threeBounce,
			backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
			backdropBorderRadius: '4px',
			primaryColour: '#000000', 
			secondaryColour: '#000000', 
			tertiaryColour: '#000000'
		}),
		HttpModule
	],
	declarations: [ AppComponent,NavComponent],
	entryComponents: [
        PopupComponent
    ],
	providers: [
		{ 
			provide: AppConfig,
		  	useValue: process.env.APP_CONFIG
		},
		{ 
			provide: APP_BASE_HREF,
		 	 useValue: '/'
		},
		/*{
			provide:HTTP_INTERCEPTORS,
			useClass:AuthInterceptor,
			multi:true
		},*/
		/*{
			provide: HTTP_INTERCEPTORS,
			useClass: RequestInterceptorService,
			multi: true
		}*/
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
