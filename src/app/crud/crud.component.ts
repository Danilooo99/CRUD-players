import { IfStmt } from '@angular/compiler';
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

  constructor() {}

  ngOnInit(): void {
  }

  // Add or Edit players
  addOrEdit():void {
    let name = document.getElementById('name') as HTMLInputElement;
    let surname = document.getElementById('surname') as HTMLInputElement;
    let age = document.getElementById('age') as HTMLInputElement;
    let country = document.getElementById('country') as HTMLInputElement;
    let select = document.querySelector('.mat-select-min-line') as HTMLInputElement;
  
    if(name.value !== "" && surname.value !== "" && age.value !== "" && country.value !== "" && select.innerText !== ""){
      if(name.value.length > 2 && surname.value.length > 2 && country.value.length > 4 ) {
        let button = document.getElementById('button') as HTMLAnchorElement;
        if(button.innerText==="Edit"){
          button.innerHTML = "Create"; 
        }

        if(this.selectedPlayer.id === 0){
          this.selectedPlayer.id = this.playerArray.length + 1;
          this.playerArray.push(this.selectedPlayer);
        }
        
        this.selectedPlayer = new Player();
      } else {
        alert("Some form fields are incorrect!")
      }
    } else {
      alert("Some form fields are incorrect!")
    }
  }

  // Data for edit players
  openForEdit(player: Player): void{
       let button = document.getElementById('button') as HTMLAnchorElement;
       button.innerHTML = "Edit";
       this.selectedPlayer = player;
  }

  //Delete players
  delete(): void {
    this.playerArray = this.playerArray.filter(x => x != this.selectedPlayer);
    this.selectedPlayer = new Player(); 
  }
  
}
