import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm !: FormGroup

  // email: string = '';
  // password: string = '';

  constructor(private http : HttpClient ,private api : ApiService , private router : Router , private formBuilder : FormBuilder,) { }

  ngOnInit(): void {
    this.signupForm =this.formBuilder.group({
      email: [''],
      password: ['']
  })}

  signup(){
    this.api.signup(this.signupForm.value)
    .subscribe({
      next:(res)=>{
      alert("success")
      this.signupForm.reset();
      this.router.navigate(['login']) 
    },
    error:()=>{
      alert("error")
    }
  })
    }
    }      
  



    