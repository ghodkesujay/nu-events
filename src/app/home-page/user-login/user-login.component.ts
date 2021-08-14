import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm!: FormGroup

  errorMessage!: string

  isAdmin: boolean = false
  isUser: boolean = false

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'email': ['', [Validators.email, Validators.required]],
      'password': ['', Validators.required]
    })

    localStorage.clear()
  }

  get formControls() {
    return this.loginForm.controls
  }

  userSignin() {
    this.authService.userlogin(this.loginForm.value).pipe(
      tap(res => {
        this.errorMessage = res.msg
        if (!res.status) return
        localStorage.setItem('user', JSON.stringify(res.user))
        localStorage.setItem('user-type', 'user')
        this.router.navigate([''])
      })
    ).subscribe()
  }

  adminSignin() {
    this.authService.adminlogin(this.loginForm.value).pipe(
      tap(res => {
        this.errorMessage = res.msg
        if (!res.status) return
        if (res.user.userType !== 12) {
          this.errorMessage = "Not A admin"
          return
        }
        localStorage.setItem('user', JSON.stringify(res.user))
        localStorage.setItem('user-type', 'admin')
        this.router.navigate(['admineventlist'])
      })
    ).subscribe()
  }

}
