import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserserviceService } from '../userservice.service';

import { Iuser } from '../userexp';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'


import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { MatSort } from '@angular/material/sort';
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
  //@ViewChild(MatSort)
  //sort: MatSort = new MatSort;
  displayedColumns: string[] = ['id', 'name','username','email','address','view'];
  dataSource: any ;
  selectedRow: any;
  //subscribe : Subscription | undefined;
  
  

  constructor( private Userservice : UserserviceService , public dialog: MatDialog) { } 
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
      //this.dataSource.sort = this.sort;
    })
    
    }
  onRowClicked(row: any) {
    this.selectedRow = row
  }
  //onSelect(hero: any): void {
    //this.selectedHeros = hero;
    /*openuserDialog(){
    const dialogRef = this.dialog.open(UserdetailsComponent,{
      width:'500px', 
      
      data:{}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('heres the data result ${result}');
    });
  }  */
  openuserDetailDialog(doc:any){
    console.log(doc)
    const dialogRef = this.dialog.open(UserdetailsComponent,{
      width:'500', 
      data:doc
    });
    //dialogRef.afterClosed().subscribe(result => {
      //console.log('heres the data result ${result}');
   //});
  }

}

