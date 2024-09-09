import { Component } from '@angular/core';
import {User} from "../../_models/user.model";
import {UserAPIService} from "../../_services/user-api.service";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    users$!: User[];


    title: string = "داشبود";

    result : string | undefined;
    welcomeMessage: boolean = true;
    // dashboard variables

     username : undefined | string;
     profileImg : string | undefined;
     password : string | undefined;
     email : undefined | string;
     nationalCode: undefined | string;
     telephone : string | undefined;
     adminRole : undefined | string;
     firstName : undefined | string;
     lastName : undefined | string;
     gender : undefined | string;
     accountLocked : undefined | string;
     coins : undefined | string;
     accountBanned : undefined | string;

    // dashboard variables


    constructor(private userAPI : UserAPIService) {
      this.reloadUsers();
    }

    reloadUsers() {
       this.userAPI.showUsers().subscribe((response : User[] )=>{
         this.users$  = response;
         const userID = ""+localStorage.getItem("$@):userIDWhatiSIS?")
         const userIndex = this.users$.findIndex(x=>x.id == userID);
         this.username = this.users$[userIndex].username ;
         this.password = this.users$[userIndex].password;
         this.email = this.users$[userIndex].email;

         this.nationalCode = this.users$[userIndex].nationalCode;
         if (this.nationalCode == "string") {
           this.nationalCode = "ست نشده";
         }
         this.telephone = this.users$[userIndex].telephone;
         if (this.telephone == "string") {
           this.telephone = "ست نشده";
         }
         this.adminRole = this.users$[userIndex].adminRole;
         if (this.adminRole == "string") {
           this.adminRole = "ست نشده";
         }
         this.firstName = this.users$[userIndex].firstName;
         if (this.firstName == "string") {
           this.firstName = "ست نشده";
         }
         this.lastName = this.users$[userIndex].lastName;
         if (this.lastName == "string") {
           this.lastName = "ست نشده";
         }
         this.gender = this.users$[userIndex].gender;
         if (this.gender == "string") {
           this.gender = "ست نشده";
         }
         this.accountLocked = this.users$[userIndex].accountLocked;
         if (this.accountLocked == "string") {
           this.accountLocked = "ست نشده"
         }
         this.coins = this.users$[userIndex].coins;
         if (this.coins == "string") {
           this.coins = "ست نشده"
         }
         this.accountBanned = this.users$[userIndex].accountBanned;
         if (this.accountBanned=="string"){
            this.accountBanned = "ست نشده"
         }

         if (this.users$[userIndex].gender == "male") {
           this.profileImg = "assets/dashboard/male.png";
         }else if(this.users$[userIndex].gender == "female") {
           this.profileImg = "assets/dashboard/female.png";
         }else {
           this.profileImg = "assets/dashboard/male.png";
         }
       })
    }







}
