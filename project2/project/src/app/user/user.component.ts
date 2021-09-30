import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input, ViewChild } from '@angular/core';
import { UserserviceService } from '../userservice.service';
//import { MatTableDataSource } from '@angular/material';
import { Iuser } from '../Userexp';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
//import { UserdetailsComponent } from '../userdetails/userdetails.component';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
//@Input() heroes: any;
  //heroes :any;
  //selectedHeros:any;

  //@Input() heroes: any;
  //heroes :any;
  //selectedHeros:any;
 

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  displayedColumns: string[] = ['id', 'name','username','email','address'];
  dataSource: any ;
  selectedRow: any;
  subscribe : Subscription | undefined;
  
  

  constructor( private Userservice : UserserviceService , private dialog : MatDialog ) { }
  //openuserDialog(){
    //const dialogRef =this.dialog.open(UserdetailsComponent);
    
  //};
  
  //toggle(){
    //this.details = !this.details;
  //};



  ngOnInit(): void {
    
    this.Userservice.fetchData().subscribe(data =>{
      this.dataSource = new MatTableDataSource<Iuser>(data);
      this.dataSource.paginator = this.paginator;
    })
    


  
  
    
  }
  onRowClicked(row: any) {
    this.selectedRow = row
  }
  //onSelect(hero: any): void {
    //this.selectedHeros = hero;
    openuserDialog(){
    const dialogRef = this .dialog.open(UserdetailsComponent,{
      width:'500px',
      data:{}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('heres the data result ${result}')
    })
  }  

}
