import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserserviceService } from './userservice.service';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
//import { MatPaginator } from '@angular/material/paginator';






@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatNativeDateModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatPaginatorModule,
    MatInputModule,
    //MatPaginator
    
    
  ],
  providers: [],
  bootstrap: [AppComponent , UserserviceService ],
  entryComponents : [UserdetailsComponent]
})
export class AppModule { }
