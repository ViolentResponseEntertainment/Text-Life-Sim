import { Component, OnInit } from '@angular/core';
import { Game } from './game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public game: Game = new Game();

  constructor() { }

  ngOnInit() {
  }

  ageUpClicked() {
    this.game.ageUp();
    console.log(this);
  }

  haveSexClicked() {
    this.game.hadSex();
  }

}
