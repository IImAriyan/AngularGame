import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {UserAPIService} from "../../_services/user-api.service";
import {User} from "../../_models/user.model";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuIsOpen: boolean = false;
  isUser: boolean = false;
  constructor() {
    if (localStorage.getItem("$@):userIDWhatiSIS?") == null) {
      this.isUser = false;
    }else {
      this.isUser = true;
    }
  }


}
