import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  receievedRow: any;

  constructor( dialogRef : MatDialogRef<UserComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any ){}

  ngOnInit(): void {
  }

}

