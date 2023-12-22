import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserData } from 'src/models/user.interface';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get<IUserData>('https://dummyjson.com/users')
  }
}
