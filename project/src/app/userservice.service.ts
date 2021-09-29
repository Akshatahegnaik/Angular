import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor( private http:HttpClient) { }

  fetchData(){
   return this.http.get("https://jsonplaceholder.typicode.com/users");

  }
  
}
