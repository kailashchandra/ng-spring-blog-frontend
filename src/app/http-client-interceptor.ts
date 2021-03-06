import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
    constructor(private $localStorage: LocalStorageService) {}

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
            
            const token = this.$localStorage.retrieve('authenticationToken');
            console.log('jwt token '+token);
            if(token) {
                const cloned = req.clone({
                    headers: req.headers.set("Authorization",
                    "Bearer " + token)
                });

                return next.handle(cloned);
            } else {
                return next.handle(req);
            }
        }
}