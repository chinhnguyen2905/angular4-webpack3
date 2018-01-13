import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Http,Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()

export class ShopService{
    constructor(private http1:Http,private http2:HttpClient){}
    getTemp1(nameCity:String){
        const url  ="http://api.openweathermap.org/data/2.5/weather?appid=f9d3b2b7ac2216fd2334f2a865df8fe0&units=metric&q=" + nameCity;
        console.log(nameCity);
        return this.http1.get(url)
            .toPromise()
            .then(res => res.json())
            .then(resJson=> resJson.main.temp);
    }
    getTemp2(){
        const url  ="https://api.github.com/users/chinhnguyen2905"; // server github, ResAPI(  need to have auhentication user(token))
        return this.http2.get(url)
            .map((res:any)=> res.login)
    }

}