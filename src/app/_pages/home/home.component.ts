import { Component } from '@angular/core';
import { RouterLink} from "@angular/router";
import {HeaderComponent} from "../../_componenets/header/header.component";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    NgIf,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  playersNumber: number = 10000;
  onlinePlayers : number = 0;


  randomNumber(min:number, max:number ) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  constructor() {
    this.onlinePlayers = this.randomNumber(3460,3480)

    setInterval(()=>{
      this.onlinePlayers = this.randomNumber(3460,3480)
    },1500)

  }

}
