import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from './userexp';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor( private http:HttpClient) { }

  public fetchData() : Observable<Iuser[]>{
   return this.http.get<Iuser[]>("https://jsonplaceholder.typicode.com/users");

  }
  
}

