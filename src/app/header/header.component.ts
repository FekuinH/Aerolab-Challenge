import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { PointsComponent } from './points/points.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;


  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {

    this.userService.loadMe().subscribe((response: User) => {
      this.user = response;
    });
  }



  public openDialog() {

    const dialogRef = this.dialog.open(PointsComponent, {
      autoFocus: false,

    });
  }
}
