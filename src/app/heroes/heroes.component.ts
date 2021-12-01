import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/messages/message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  /* Start Variables declared */
  
    selectedHero?: Hero;
    heroes: Hero[] = [];
  
  /* End Variables declared */

  constructor(
      private heroService: HeroService,
      private messageService: MessageService
    ) { }

  /**
   * Initial component Method
   */
   ngOnInit(): void {
     this.getHeroes();
  }

  
  /**
   * Start Method needs
   * Date: 01-12-2021
   */
  
  /**
   * Developer: Donaldo Parra
   * Date: 01-12-2021
   * @param hero
   * Is the selected object in the list
   */
  onSelector(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroComponent: Selected hero id=${hero.id}`);
  }

  /**
   * 
   */
  getHeroes(): void{
    this.heroService.getHeroes().subscribe( heroes =>{
      this.heroes = heroes;
    });
  }

  /**
   * End Method needs
   */

}
