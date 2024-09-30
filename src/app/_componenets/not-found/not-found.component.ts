import {Component, HostListener} from '@angular/core';
import {RouterLink} from "@angular/router";
import {LoaderNotFoundComponent} from "../loader-not-found/loader-not-found.component";
import {NgIf} from "@angular/common";
import {delay} from "rxjs";
import {UserAPIService} from "../../_services/user-api.service";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    RouterLink,
    LoaderNotFoundComponent,
    NgIf
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  isLoading: boolean = true ;


  @HostListener("document:DOMContentLoaded", ['$event'])
  load() {
    setTimeout(()=>{
      this.isLoading = false;
    },2000)
  }
}
