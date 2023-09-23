import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup

  constructor(private http : HttpClient ,private api : ApiService , private router : Router , private formBuilder : FormBuilder,) { }

  ngOnInit(): void {
    this.loginForm =this.formBuilder.group({
      email: [''],
      password: ['']
  })}


  login(){
    this.api.login()
    .subscribe({
      next:(res)=>{
        const user = res.find((a:any)=>{
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        })
        if(user){
          alert("Login Succes")
          this.loginForm.reset();
          this.router.navigate(['products'])
        }
        else{
          alert("user not found")
        }
      
      },
      error:(err)=>{
        alert("error while logging in")
      }
    })

  }

}
