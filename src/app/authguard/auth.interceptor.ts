
//don't use

import  {Injectable} from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpEvent,HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        const authReq= req.clone({
            headers:req.headers.set('Authorization','token ...')
        })
        return next.handle(authReq);
    }
}

