import { Injectable } from '@angular/core';
import {Post} from "../_models/post.model";

@Injectable({
  providedIn: 'root'
})

export class PostService {

    posts : Post[] = [
      {
        title:"بهترین بازی جهان ماینکرفت" ,
        description:" ماینکرفت یک گیم تفریحی است برای گذارندن وقت خود در بازی های انلاین که میتوانید در ان خانه بسازید و به بقا کردن به پردازید با دوستان خود و خانه های خود را بسازید و به پادشاهی در بازی مشغول شوید." ,
        image:"assets/home/posts/minecraft.png",
        comments:"132",
        likes:"193",
        routePath:"minecraftGame",
        titleDescription:"در این بلاگ قصد داریم توضیحاتی در باره ی ماینکرفت بدیم."
      },

      {
        title:"کال اف دیوتی" ,
        description:" ماینکرفت یک گیم تفریحی است برای گذارندن وقت خود در بازی های انلاین که میتوانید در ان خانه بسازید و به بقا کردن به پردازید با دوستان خود و خانه های خود را بسازید و به پادشاهی در بازی مشغول شوید." ,
        image:"assets/home/posts/call-of-duty.png",
        comments:"202",
        likes:"293",
        routePath:"callofDutyGame",
        titleDescription:"قرار است در این بلاگ در باره ی بازی کالاف دیوتی موبایل ورژن 7 توضیح دهیم پس لطفا همراه ما باشید.",
        createdBy:"Arian",

      },

      {
        title:"هورایزن" ,
        description:" ماینکرفت یک گیم تفریحی است برای گذارندن وقت خود در بازی های انلاین که میتوانید در ان خانه بسازید و به بقا کردن به پردازید با دوستان خود و خانه های خود را بسازید و به پادشاهی در بازی مشغول شوید." ,
        image:"assets/home/posts/horaizen.jpg",
        comments:"182",
        likes:"253",
        routePath:"horaizenGame"
      },
    ]
  constructor() {

  }

  public getAllPosts() : Post[] {
      return this.posts;
  }

  public getPostByRoute(route: string | undefined) : Post | undefined {
      return this.getAllPosts()[this.posts.findIndex(x=>x.routePath == route)] || undefined;
  }


}
