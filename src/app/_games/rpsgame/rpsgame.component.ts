import { Component } from '@angular/core';
import {NgIf, NgStyle} from "@angular/common";
import Swal from "sweetalert2";
import {LoaderComponent} from "../../_componenets/loader/loader.component";
@Component({
  selector: 'app-rpsgame',
  standalone: true,
  imports: [
    NgIf,
    NgStyle,
    LoaderComponent
  ],
  templateUrl: './rpsgame.component.html',
  styleUrl: './rpsgame.component.css'
})
export class RPSgameComponent {
    selected:number = 0;
    aiResultNumber:number = 0;
    i:number = 0;
    gameList: [string,string,string] = [
      'Rock','Paper','Scissors'
    ];
    gameColors: [string,string,string] = [
      'transparent','transparent','transparent'
    ]
    selectColors: [string,string,string] = [
    'rgb(253 230 138 / 1)','rgb(253 230 138 / 1)','rgb(253 230 138 / 1)'
    ]
    resultText: string | undefined;
    swalError(message:string) {
      Swal.fire({
        icon:'error',
        text:message,
        confirmButtonText:'باشه',
      })
    }

    reloadGame() {
      this.i = 0;
      this.resultText = undefined;
      this.aiResultNumber = 0;
      this.selected = 0;
      this.gameColors = [
        'transparent', 'transparent', 'transparent'
      ]
      this.selectColors = [
        'rgb(253 230 138 / 1)', 'rgb(253 230 138 / 1)', 'rgb(253 230 138 / 1)'
      ]
    }
    select(select:number) {
      this.selected = select;
    }

    startGame() {
      if (this.selected == 0) {
        this.swalError('!! شما باید یک مقدار را انتخاب کنید')
      }else {
        const timer = setInterval(()=>{
          this.i = this.i +1;
          if (this.i == 30) {
            this.gameColors = ['transparent','transparent','transparent'];
            this.aiResultNumber = Math.floor(Math.random()*3);
            this.gameColors[this.aiResultNumber] = '#597ae5';
            if (this.selected == 1 && this.aiResultNumber == 1) {

              this.resultText = 'من بردم !';
              this.gameColors[this.aiResultNumber] = '#00FF00';
              this.selectColors[this.selected-1] = '#FF0000';

            }else if (this.selected == 2 && this.aiResultNumber == 0) {

              this.gameColors[this.aiResultNumber] = '#FF0000';
              this.selectColors[this.selected-1] = '#00FF00';
              this.resultText = 'تو بردی !';

            }else if (this.selected == 3 && this.aiResultNumber == 1) {

              this.gameColors[this.aiResultNumber] = '#00FF00';
              this.selectColors[this.selected-1] = "#FF0000";
              this.resultText = 'من بردم !';

            }else if (this.selected == 1 && this.aiResultNumber == 2) {

              this.gameColors[this.aiResultNumber] = '#FF0000';
              this.selectColors[this.selected-1] = "#00FF00";
              this.resultText = 'تو بردی !';

            }else {
              this.resultText = 'بازی مساوی شد';
              this.gameColors[this.aiResultNumber] = 'rgb(253 230 138 / 1)';
              this.selectColors[this.selected-1] = "rgb(253 230 138 / 1)";
            }
            clearInterval(timer);
            this.i = 0;

          }else {
            this.gameColors = ['transparent','transparent','transparent'];
            this.aiResultNumber = Math.floor(Math.random()*3);
            this.gameColors[this.aiResultNumber] = '#597ae5';
          }
        },200)

      }

    }

}
