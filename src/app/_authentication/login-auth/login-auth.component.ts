import { Component } from '@angular/core';
import {HeaderComponent} from "../../_componenets/header/header.component";
import {MatIcon} from "@angular/material/icon";
import {UserIconComponent} from "../../_componenets/user-icon/user-icon.component";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login-auth',
  standalone: true,
  imports: [
    HeaderComponent,
    MatIcon,
    UserIconComponent,
    RouterLink,
    NgIf
  ],
  templateUrl: './login-auth.component.html',
  styleUrl: './login-auth.component.css'
})
export class LoginAuthComponent {
  isHover: boolean = false;



  protected readonly alert = alert;
  protected readonly console = console;
}
