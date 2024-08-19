import { Component } from '@angular/core';
import {HeaderComponent} from "../../_componenets/header/header.component";
import {MatIcon} from "@angular/material/icon";
import {UserIconComponent} from "../../_componenets/user-icon/user-icon.component";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserAPIService} from "../../_services/user-api.service";

@Component({
  selector: 'app-login-auth',
  standalone: true,
  imports: [
    HeaderComponent,
    MatIcon,
    UserIconComponent,
    RouterLink,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './login-auth.component.html',
  styleUrl: './login-auth.component.css'
})
export class LoginAuthComponent {
  isHover: boolean = false;
  loginForm: FormGroup;
  constructor(private userAPI : UserAPIService) {
    this.loginForm = new FormGroup({
      username: new FormControl("",[Validators.required,Validators.maxLength(20)]),
      password: new FormControl("",[Validators.required,Validators.maxLength(20)]),
    })
  }
}
