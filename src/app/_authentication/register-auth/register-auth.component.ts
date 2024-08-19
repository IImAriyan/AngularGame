import { Component } from '@angular/core';
import {HeaderComponent} from "../../_componenets/header/header.component";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {UserIconComponent} from "../../_componenets/user-icon/user-icon.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserAPIService} from "../../_services/user-api.service";
import {User} from "../../_models/user.model";

@Component({
  selector: 'app-register-auth',
  standalone: true,
  imports: [
    HeaderComponent,
    NgIf,
    RouterLink,
    UserIconComponent,
    ReactiveFormsModule
  ],
  templateUrl: './register-auth.component.html',
  styleUrl: './register-auth.component.css'
})
export class RegisterAuthComponent {
  isHover:boolean = false;
  registerForm: FormGroup;
  constructor(private userAPI : UserAPIService) {
    this.registerForm = new FormGroup({
      username: new FormControl("",[Validators.required,Validators.maxLength(20)]),
      password: new FormControl("",[Validators.required,Validators.maxLength(20)]),
      passwordConfirm: new FormControl("",[Validators.required,Validators.maxLength(20)]),
      email: new FormControl("",[Validators.required,Validators.email]),
    })
  }


}
