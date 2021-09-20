import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserService} from "./user/user.service";

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
    const response =  next.handle(request);
    response.subscribe((res) => {
      const resp = res as HttpResponse<any>;
      if (resp.body) {
        if (resp.status != 200) {
          alert("something goes wrong")
        }
      }
    });
    return response;
  }
}
