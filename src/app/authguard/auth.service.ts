import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Response } from '@angular/http';
import { LoginService } from '../login/login.service';


@Injectable()
export class AuthService {
  isLoggedIn = false;
   // Assuming this would be cached somehow from a login call.
   public authTokenStale: string = 'stale_auth_token';
   public authTokenNew: string = 'new_auth_token';
   public currentToken: string;

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor(){
    this.currentToken = "a121f4118ca70d5a374f53763dea4224779e482c";
    //this.currentToken = this.authTokenStale; 
  }
  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true); 

    /*return this._http.get(process.env.APP_CONFIG + '/api/login')
       .map(res => {
         this.isLoggedIn = true;
        })
       .catch((error:any)=> Observable.throw(error || 'Server Error...'))*/
  }

  setLogined(value:boolean){
    this.isLoggedIn = value;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  ////////////////////////////token func////////////////////////////////////
  getAuthToken() {
      return this.currentToken;
  }

  refreshToken(): Observable<string> {
      /*
          The call that goes in here will use the existing refresh token to call
          a method on the oAuth server (usually called refreshToken) to get a new
          authorization token for the API calls.
      */

      this.currentToken = this.authTokenNew;

      return Observable.of(this.authTokenNew).delay(200);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/