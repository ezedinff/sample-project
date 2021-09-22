import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserService} from "./user/user.service";
import {map} from "rxjs/operators";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private readonly userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<HttpResponse<any>>> {
    if (this.userService.currentUser) {
      request = request.clone({
        setHeaders: {
          Authorization: `bearer ${this.userService.currentUser.access}`
        }
      });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log("do something on the response");
        }
        return event;
      })
    );
  }
}
