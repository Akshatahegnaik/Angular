import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http : HttpClient) { }
 
  //save data on the database
  postProduct(data:any){
    return this.http.post<any>("http://localhost:3000/productList/",data)
  }

  getProduct(){
    return this.http.get<any>("http://localhost:3000/productList/")
  }

  putProduct(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/productList/"+id,data)
  }

  deleteProduct(id:number){
    return this.http.delete<any>("http://localhost:3000/productList/"+id)
  }



  // login(email: string, password: string) {
  //   return this.http.get(`${this.apiUrl}/signupUsers?email=${email}&password=${password}`);
  // }

  login(){
    return this.http.get<any>("http://localhost:3000/signupUsers")
  }

  signup(data:any){
    return this.http.post<any>("http://localhost:3000/signupUsers",data)
  }
}
