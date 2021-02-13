import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  
  getHeroes(): Observable<Hero[]> {
    let heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  add() {
    HEROES.forEach(function(item, index) {
        let highestId = -1;
        if (item.id > highestId) {
            highestId = item.id;
        }
        console.log (highestId);
      })
    let aNewOne = {
        "id": 2,
        "firstname": "Jay",
        "lastname": "Lo",
        "email": "jl@example.com",
        "phone": "650 238 8375"
    }
    HEROES.push(aNewOne);
    console.log(HEROES);

    this.messageService.add('HeroService: add heroes');
  }

  delete(identifier: number) {
    HEROES.forEach(function(item, index) {
        if (item.id === identifier) {
            HEROES.splice(index, 1);
        }
      })
    this.messageService.add('HeroService: delete hero id' + identifier);
  }
}
