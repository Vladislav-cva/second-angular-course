import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor (
    private router: Router,
    private loginService: LoginService
  ) {}

  loginForm = new FormGroup({
    email: new FormControl<string>(
      '',
    [
      Validators.required,
    ]),
    password: new FormControl<string>(
      '',
      [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/)
    ])
  })

  get email () {
    return this.loginForm.controls.email
  }

  get password () {
   return this.loginForm.controls.password
  }

  submitLogin () {
    this.loginService.logIn(this.loginForm.value as {email: string, password: string}).subscribe(
      {
        next: () => this.router.navigate(['admin'])
      }
    )    
  }

  ngOnInit(): void {
      if(this.loginService.isLoggedIn()){
        this.router.navigate(['admin'])
      }
  }

}
