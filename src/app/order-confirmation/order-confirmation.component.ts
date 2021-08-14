import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../../../src/app/shared/user.model'

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  @Input()
  user!: User;
  @Input()
  index!: number;

  constructor(private userService: UserService) { }

  even: any;

  ngOnInit(): void {

    this.retrieveTutorials();
  }

  retrieveTutorials() {
    this.userService.getUser()
      .subscribe(
        data => {
          this.even = data;
        },
        error => {
          console.log(error);
        });
  }

}
