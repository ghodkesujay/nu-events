import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class AddUserComponent implements OnInit {
  @Input() firstName: string | undefined;
  
  user = {
    
    firstName: '',
    lastName: '',
    phone: '',
    numberOfPeople: '',
    email: '',
  };
  submitted = false;
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveUser() {
    const data = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      phone: this.user.phone,
      numberOfPeople: this.user.numberOfPeople,
      email: this.user.email,
    };

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newUser() {
    this.submitted = false;
    this.user = {
      firstName: '',
      lastName: '',
      phone: '',
      numberOfPeople: '',
      email: ''
    };
  }
  sendData(){
    
  }
}
