import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from '../model/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private http: HttpClient
  ) { }

  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users');

  }
}
