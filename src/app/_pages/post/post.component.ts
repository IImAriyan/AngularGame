import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {PostService} from "../../_services/post.service";
import {NotFoundComponent} from "../../_componenets/not-found/not-found.component";
import {NgIf} from "@angular/common";
import {Post} from "../../_models/post.model";
import {HeaderComponent} from "../../_componenets/header/header.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    NotFoundComponent,
    NgIf,
    HeaderComponent,
    RouterLink
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  routePath: string | undefined;
  isFinded: boolean = false;
  post: Post | undefined ;

  constructor(private activeRoute: ActivatedRoute, private postService: PostService, private router: Router)  {
    this.activeRoute.params.subscribe(params => {
      this.routePath = params['id'];
    })
    switch (this.postService.getPostByRoute(this.routePath)) {
      case undefined :
          this.isFinded = false;
          break;
      default :
        this.isFinded = true;
        this.post = this.postService.getPostByRoute(this.routePath)
    }

  }
}
