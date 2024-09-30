import {Component, inject} from '@angular/core';
import { RouterLink} from "@angular/router";
import {HeaderComponent} from "../../_componenets/header/header.component";
import {NgIf} from "@angular/common";
import {Post} from "../../_models/post.model";
import {PostService} from "../../_services/post.service";


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

  posts : Post[] = inject(PostService).getAllPosts();

  randomNumber(min:number, max:number ): number  {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  constructor() {
    this.onlinePlayers = this.randomNumber(3460,3480)

    setInterval((): void =>{
      this.onlinePlayers = this.randomNumber(3460,3480)
    },1500)

  }

}
