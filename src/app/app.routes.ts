import { Routes } from '@angular/router';
import {RPSgameComponent} from "./_games/rpsgame/rpsgame.component";
import {HomeComponent} from "./_pages/home/home.component";


export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"home",component : HomeComponent},
  {path:"home/games/RPSgame",component:RPSgameComponent},
];
