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

  add(personToAdd: object) {

    console.log('in serv', personToAdd);
        // increment id
        if (personToAdd[0].id === -1) {
            let highestId = -1;
            
                HEROES.forEach(function(item, index) {
                    if (item.id > highestId) {
                        highestId = item.id;
                    }
                });
            
            highestId ++;
            personToAdd[0].id = highestId;
        }
    
    HEROES.push(personToAdd[0]);

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
