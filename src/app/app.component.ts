import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';
import { GenderPrefixPipe } from './gender-prefix.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular13CRUD';
  displayedColumns: string[] = ['productName', 'category', 'date', 'gender', 'price','action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(public dialog: MatDialog,private api:ApiService) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllProducts();
      }
    })
  }

  ngOnInit(){
    this.getAllProducts()
  }

  getAllProducts(){
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res)
        this.dataSource.paginator=this.paginator
        this.dataSource.sort=this.sort
      },
      error:(err)=>{
        alert("error while fetching")
      }
    })
  }

  editProduct(row: any){
    this.dialog.open(DialogComponent,{
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllProducts();
      }
    })
  }

  deleteProduct(id:number){
      this.api.deleteProduct(id)
      .subscribe({
        next:(res)=>{
          alert("Product is Deleted")
          this.getAllProducts()
        },
        error:()=>{
          alert("Error while Deleting")
        }
      })
    }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
