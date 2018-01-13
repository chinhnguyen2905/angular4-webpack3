import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class LoginService{
    constructor(private http:Http){}
    login(value:Object){
        const url = "https://jsonplaceholder.typicode.com/posts";//URL SERVICE LOGIN
        const headers = new Headers({'Content-Type':'application/json'});
        const body = JSON.stringify(value);
        return this.http.post(url,body,{headers})
        .toPromise()
        .then(res => res.json())
    }

}