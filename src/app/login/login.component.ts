import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  export class LoginComponent {
  constructor(private _FormBuilder: FormBuilder, private _Router: Router) { }

  isLoading: boolean = false;
  passwordShow:boolean=false;


  signupForm: FormGroup = this._FormBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,12}$/)]],
  });



  handelLogin(form: FormGroup): void {
    this.isLoading=true;

    if (form.invalid) {
      this.isLoading=false;
      this.signupForm.markAllAsTouched();
      return;
    }
  }

}
