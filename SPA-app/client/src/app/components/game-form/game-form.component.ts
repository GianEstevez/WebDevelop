import { Component, HostBinding, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { GamesService } from '../../services/games.service';


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  game: Game | any = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };



  constructor(private gameService: GamesService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(){
    this.updateGame();
  }

  saveNewGame() {
    delete this.game.created_at;
    delete this.game.id;
    console.log(this.game)

    this.gameService.saveGame(this.game)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/games']);
        
      },
      err => console.log(err)
      )
    }

  

  updateGame() {
    
    const params = this.activeRoute.snapshot.params;   
    delete this.game.created_at;    
    console.log(params.id);
    
    if (params.id){
      this.gameService.getGame(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.game = res;
          
        },
        err => console.log(err)
      )
    }

  }
  

}
