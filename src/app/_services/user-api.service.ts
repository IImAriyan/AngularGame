import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../_models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserAPIService {
  apiLink: string = "https://localhost:8080/api/";
  constructor(private http: HttpClient)  {}
  showUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiLink+"users/list")
  }
}
