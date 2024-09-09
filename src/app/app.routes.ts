import { Routes } from '@angular/router';
import {RPSgameComponent} from "./_games/rpsgame/rpsgame.component";
import {HomeComponent} from "./_pages/home/home.component";
import {LoginAuthComponent} from "./_authentication/login-auth/login-auth.component";
import {authGuard} from "./_guards/auth.guard";
import {RegisterAuthComponent} from "./_authentication/register-auth/register-auth.component";
import {DashboardComponent} from "./_pages/dashboard/dashboard.component";
import {NotFoundComponent} from "./_componenets/not-found/not-found.component";



export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },

  {
    path:"home",
    component : HomeComponent
  },

  // Games


  {
    path:"home/games/RPSgame",
    component:RPSgameComponent,
    canActivate:[authGuard]
  },




  // End Games
  {
    path:"authentication/login",
    component:LoginAuthComponent
  },

  {
    path: "authentication/register",
    component: RegisterAuthComponent
  },

  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate:[authGuard]
  },

  {
    path:'**',
    component:NotFoundComponent,
  }

];
