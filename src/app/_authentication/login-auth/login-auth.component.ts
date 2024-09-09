import { Component } from '@angular/core';
import {HeaderComponent} from "../../_componenets/header/header.component";
import {MatIcon} from "@angular/material/icon";
import {UserIconComponent} from "../../_componenets/user-icon/user-icon.component";
import {Router, RouterLink} from "@angular/router";
import {NgIf, NgStyle} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserAPIService} from "../../_services/user-api.service";
import {User} from "../../_models/user.model";

@Component({
  selector: 'app-login-auth',
  standalone: true,
  imports: [
    HeaderComponent,
    MatIcon,
    UserIconComponent,
    RouterLink,
    NgIf,
    ReactiveFormsModule,
    NgStyle
  ],
  templateUrl: './login-auth.component.html',
  styleUrl: './login-auth.component.css'
})
export class LoginAuthComponent {

  borderColors: [string,string] = [
    "rgb(55, 65 ,81)","rgb(55, 65 ,81)"
  ]
  usernameError : undefined | string;
  passwordError : undefined | string;

  users$!: User[];

  isHover: boolean = false;
  loginForm: FormGroup;
  constructor(private userAPI : UserAPIService,private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl("",[Validators.required,Validators.maxLength(20)]),
      password: new FormControl("",[Validators.required,Validators.maxLength(20)]),
    })
    this.reloadUsers();
  }

  // Loading Users
  reloadUsers() {
    this.userAPI.showUsers().subscribe((response : User[])=>{
      this.users$ = response;
    })
  }


  login() {
    var username = this.loginForm.controls["username"].value;
    var password = this.loginForm.controls["password"].value;
    if (username == "") {
      this.borderColors[0] = "rgb(244 63 94)";
      this.usernameError = "نام کاربری را وارد کنید";
    }else {

      this.borderColors[0] = "rgb(55,65,81)";
      this.usernameError = undefined;
      if (password == "" ) {
        this.borderColors[1] = "rgb(244 63 94)";
        this.passwordError = "گذرواژه را وارد کنید";
      }else {
        this.borderColors[1] = "rgb(55,65,81)";
        this.passwordError = undefined;

        // Reloading Users
        this.reloadUsers();

        // Login System
        let find = 'NotFound' ;
        for (let i = 0;i < this.users$.length ; i++) {
          if (this.users$[i].username == username) {
            find = 'finded';
            this.borderColors[0] = "rgb(55,65,81)";
            this.usernameError = undefined;

            if (this.users$[i].password == password) {

              // Login Users
              localStorage.key(1);
              localStorage.setItem("$@):userIDWhatiSIS?",""+this.users$[i].id);


              // sweetalert Success Message \\

              this.router.navigate(['/dashboard']);

            }else {
              this.borderColors[1] = "rgb(244 63 94)";
              this.passwordError = "گذرواژه اشتباه است !";
            }

          }
        }

        if (find == 'NotFound') {
          this.borderColors[0] = "rgb(244 63 94)";
          this.usernameError = "کاربر یافت نشد!!";
        }

      }
    }
  }
}
