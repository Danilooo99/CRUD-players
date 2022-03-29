import { Component } from '@angular/core';
import { Player } from './models/player'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'CRUD-players';

  playerArray: Player[] = [
    {id: 1, name: "Kevin", surname: "De Bruyne", age: 29, country: "Belgium", position: "Midfielder" },
    {id: 2, name: "Leo", surname: "Messi", age: 34, country: "Argentina", position: "Striker" },
    {id: 3, name: "Cristiano", surname: "Ronaldo", age: 36, country: "Portugal", position: "Striker" },
  ]

}
