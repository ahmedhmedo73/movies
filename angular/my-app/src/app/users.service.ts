import { Injectable } from '@angular/core';
import { User } from './user';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }
data:any;
getTrending():Observable<any>
{
  return  this._HttpClient.get('http://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50');
}
  users:User[] = [
    {name:'ahmed', age:25,gender:'male',salary:4000, dateOfBirth:'1/1/2000'},
    {name:'ahmed', age:25,gender:'male',salary:4000, dateOfBirth:'1/1/2000'},
    {name:'ahmed', age:25,gender:'male',salary:4000, dateOfBirth:'1/1/2000'},
    {name:'ahmed', age:25,gender:'male',salary:4000, dateOfBirth:'1/1/2000'},
    {name:'ahmed', age:25,gender:'male',salary:4000, dateOfBirth:'1/1/2000'},
    {name:'ahmed', age:25,gender:'male',salary:4000, dateOfBirth:'1/1/2000'}
  ]
}
