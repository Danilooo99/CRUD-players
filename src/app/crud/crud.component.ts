import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {

  

  playerArray: Player[] = [
    {id: 1, name: "Kevin", surname: "De Bruyne", age: 29, country: "Belgium", position: "Midfielder" },
    {id: 2, name: "Leo", surname: "Messi", age: 34, country: "Argentina", position: "Striker" },
    {id: 3, name: "Cristiano", surname: "Ronaldo", age: 36, country: "Portugal", position: "Striker" },
  ];

  selectedPlayer: Player = new Player(); 

  constructor() { }

  ngOnInit(): void {}

  addOrEdit():void {
    if(this.selectedPlayer.id === 0){
      this.selectedPlayer.id = this.playerArray.length + 1;
      this.playerArray.push(this.selectedPlayer);
    }
    
    this.selectedPlayer = new Player();
  }

  openForEdit(player: Player): void{
    this.selectedPlayer = player;
  }

  delete(): void {
    this.playerArray = this.playerArray.filter(x => x != this.selectedPlayer);
    this.selectedPlayer = new Player(); 
  }
  

}
