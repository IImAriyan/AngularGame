import { Component } from '@angular/core';
import {HeaderComponent} from "../../_componenets/header/header.component";
import {NgIf, NgStyle} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
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
    ReactiveFormsModule,
    NgStyle
  ],
  templateUrl: './register-auth.component.html',
  styleUrl: './register-auth.component.css'
})
export class RegisterAuthComponent {
  isHover:boolean = false;
  borderColors: [string,string,string,string] = [
    "rgb(55 65 81)","rgb(55 65 81)",
    "rgb(55 65 81)","rgb(55 65 81)"
  ]
  usernameError : undefined | string;
  passwordError : undefined | string;
  passwordConfirmError : undefined | string;
  emailError : undefined | string;
  users$!: User[];

  userCreated !: User;
  registerForm: FormGroup;
  constructor(private userAPI : UserAPIService,private router : Router) {
    this.registerForm = new FormGroup({
      username: new FormControl("",[Validators.required,Validators.maxLength(20)]),
      password: new FormControl("",[Validators.required,Validators.maxLength(20)]),
      passwordConfirm: new FormControl("",[Validators.required,Validators.maxLength(20)]),
      email: new FormControl("",[Validators.required,Validators.email]),
    })
    this.reloadUsers();
  }

  // Loading Users
  reloadUsers() {
    this.userAPI.showUsers().subscribe((response : User[])=>{
      this.users$ = response;
    })
  }

  register() {
    const username = this.registerForm.controls["username"].value;
    const password = this.registerForm.controls["password"].value;
    const email = this.registerForm.controls["email"].value;
    const passwordConfirm = this.registerForm.controls['passwordConfirm'].value;

    if (username == "") {
      this.borderColors[0] = "rgb(244 63 94)";
      this.usernameError = "نام کاربری را وارد کنید"
    }else {
      this.borderColors[0] = "rgb(55,65,81)";
      this.usernameError = undefined;
      if (email == "") {
        this.borderColors[1] = "rgb(244 63 94)";
        this.emailError = "ایمیل را وارد کنید";
      }else {

        this.borderColors[1] = "rgb(55,65,81)";
        this.emailError = undefined;

        this.borderColors[0] = "rgb(55,65,81)";
        this.usernameError = undefined;

        if (password == "") {
          this.borderColors[2] = "rgb(244 63 94)";
          this.passwordError = undefined;
        }else {
          this.borderColors[0] = "rgb(55,65,81)";
          this.emailError = undefined;

          this.borderColors[1] = "rgb(55,65,81)";
          this.usernameError = undefined;

          this.borderColors[2] = "rgb(55,65,81)";
          this.passwordError = undefined;

          if (passwordConfirm == "") {
            this.borderColors[3] = "rgb(244 63 94)";
            this.passwordConfirmError = undefined;
          }else {
            this.borderColors[0] = "rgb(55,65,81)";
            this.emailError = undefined;

            this.borderColors[1] = "rgb(55,65,81)";
            this.usernameError = undefined;

            this.borderColors[2] = "rgb(55,65,81)";
            this.passwordError = undefined;

            this.borderColors[3] = "rgb(55,65,81)";
            this.passwordConfirmError = undefined;

            if (passwordConfirm == password) {
              this.borderColors[0] = "rgb(55,65,81)";
              this.emailError = undefined;

              this.borderColors[1] = "rgb(55,65,81)";
              this.usernameError = undefined;

              this.borderColors[2] = "rgb(55,65,81)";
              this.passwordError = undefined;

              this.borderColors[3] = "rgb(55,65,81)";
              this.passwordConfirmError = undefined;


              const username = this.registerForm.controls["username"].value;
              const password = this.registerForm.controls["password"].value;
              const email = this.registerForm.controls["email"].value;

              this.userCreated = new User();

              this.userCreated.email = email;
              this.userCreated.password = password;
              this.userCreated.username = username;
              this.userCreated.adminRole = "Member";

              this.userAPI.addUsers(this.userCreated).subscribe((response: User) => {
                console.log(response)
                this.reloadUsers();
              })

              this.router.navigate(['/authentication/login'])

            }else {
              this.borderColors[2] = "rgb(244 63 94)";
              this.passwordError = "پسورد ها یکی نیستند!";

              this.borderColors[3] = "rgb(55,65,81)";
              this.passwordConfirmError = "پسورد ها یکی نیستند!";
            }

          }

        }
      }
    }
  }

}
