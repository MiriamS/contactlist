import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
      if (this.selectedHero === hero) {
        this.selectedHero = null;
      } else {
        this.selectedHero = hero;
      }
    
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  deleteHero(hero: Hero): void {
    if(window.confirm("Are you sure to delete ")) {
        console.log("Implement delete functionality here" + hero.id);
      }
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
