import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm!: FormGroup

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
  }

  get formControls() {
    return this.loginForm.controls
  }

  login() {
    this.authService.adminlogin(this.loginForm.value).pipe(
      tap(user => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('user-type', 'admin')
        this.router.navigate(['admineventlist'])
      })
    ).subscribe()
  }

}
