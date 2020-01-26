import { Component, OnInit } from '@angular/core';
import { MatDialogRef,MatDialogContent } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert';



@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  pointsForm: FormGroup = new FormGroup({
    amount: new FormControl()
  })

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  public addCoins() {

    let amount = parseInt(this.pointsForm.value.amount);

    this.userService.getCoins(amount).subscribe(
      (response: any) => {
        Swal('Buy succesfull', response.message, 'success');
        setTimeout(() => {
          window.location.reload();
        }, 1800);
      },
      (error) => {
        Swal('Error', `${error.error.error}`, 'error');
      }
    );
  }
}
