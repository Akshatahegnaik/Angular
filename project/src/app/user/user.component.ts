import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input() heroes: any;
  //heroes:any;
  selectedHeros:any;

  constructor( private Userservice : UserserviceService) { }
  

  //toggle(){
    //this.details = !this.details;
  //};



  ngOnInit(): void {
    this.Userservice.fetchData().subscribe(
    (data: any)=>this.heroes=data);


  
  
    
  }

  onSelect(hero: any): void {
    this.selectedHeros = hero;
}
}