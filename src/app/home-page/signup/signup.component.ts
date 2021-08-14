import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signUpService: SignupService,
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      'userName': ['', Validators.required],
      'email': ['', [Validators.email, Validators.required]],
      'password': ['', Validators.required],
      'gender': ['', Validators.required]
    })
  }

  get formControls() {
    return this.signUpForm.controls
  }

  signUp() {
    this.signUpService.create(this.signUpForm.value).pipe(
      tap(user => {
        this.router.navigate(['login'])
      })
    ).subscribe()
  }
}
