import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http'
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private route: Router,
    private http: HttpClient
    ) { }

    setToken (token: string) {
      localStorage.setItem('token', token)
    }

    getToken () {
      return localStorage.getItem('token')
    }

    isLoggedIn () {      
      return this.getToken() !== null
    }

    logIn (user: {email: string, password: string}) {
      return this.http.post(
        'https://dummyjson.com/auth/login',
        JSON.stringify({
          // username: user.email,
          username: 'kminchelle',
          // password: user.password
          password: '0lelplR'
        }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
        
        ).pipe(
        tap((response: any) => {
          console.log(response)
          this.setToken(response.token)
        })
      )
    }

    logout () {
      this.route.navigate(['login'])
    }

}
