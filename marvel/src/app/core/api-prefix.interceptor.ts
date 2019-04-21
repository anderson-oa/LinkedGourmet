import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()

export class ApiPrefix implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        var timestamp = Number(new Date());
        var hash = Md5.hashStr(`${timestamp}${environment.PrivateKey}${environment.PublicKey}`);        
        var url = `${environment.API}/${req.url}&ts=${timestamp}&apikey=${environment.PublicKey}&hash=${hash}`;        
        return next.handle(req.clone({ url }));
    }
}