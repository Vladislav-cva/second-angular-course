import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUser } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getPersonsList (): Observable<IUser[]> {    
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users?_start=0&_limit=5')
  }


  getPerson (id: number){
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
