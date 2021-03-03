
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  errors: any;
  backColor: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {
      this.buildForm();
    }

  ngOnInit(): void {
  }

  register(event: Event){
    event.preventDefault();
    if(this.form.valid){
    const user = {
      'name': this.form.value.name,
      'email': this.form.value.email,
      'password': this.form.value.password
    };
    return this.authService.register(user)
    .subscribe((response) => {
      if(response){
        this.router.navigate(['/auth/login']);
        localStorage.setItem('token',response['access_token']);
        this.errors = false;
      } else{
        this.errors = 'Usuario o contraseña incorrectos';
      }
    })
  }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.minLength(5),Validators.email]],
      password: ['',[Validators.required, Validators.minLength(5)]]
    })
  }
}
