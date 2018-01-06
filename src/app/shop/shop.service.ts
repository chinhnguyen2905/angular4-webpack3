import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http,Headers} from '@angular/http';

@Injectable()

export class ShopService{
    constructor(private http:Http){}
    getTemp(nameCity:String){
        const url  ="http://api.openweathermap.org/data/2.5/weather?appid=f9d3b2b7ac2216fd2334f2a865df8fe0&units=metric&q=" + nameCity;
        console.log(nameCity);
        return this.http.get(url)
            .toPromise()
            .then(res=>res.json())
            .then(resJson=>resJson.main.temp);
    }

}