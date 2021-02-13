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


    deleteHero(personToRemove: object) {
        if(window.confirm("Are you sure to delete " + personToRemove['firstname'] + ' ' + personToRemove['lastname'] + '?')) {
            this.heroService.delete(personToRemove['id']);
        }
    }
 

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
