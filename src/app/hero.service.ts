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

    getOne(identifier: number) {
        let hero = [];
        HEROES.forEach(function (item) {
            if (item.id === identifier) {
                hero.push(item);
            }
        })
        return hero;
        this.messageService.add('HeroService: getting one ' + identifier);
    }

    add(personToAdd: object) {

        // increment id
        if (personToAdd[0].id === -1) {
            let highestId = -1;

            HEROES.forEach(function (item, index) {
                if (item.id > highestId) {
                    highestId = item.id;
                }
            });

            highestId++;
            personToAdd[0].id = highestId;
        }

        HEROES.push(personToAdd[0]);

        this.messageService.add('HeroService: add heroes');
    }

    update(personToAdd: object) {

        HEROES.forEach(function (item, index) {
            if (item.id === personToAdd[0].id) {
                item.firstname = personToAdd[0].firstname;
                item.lastname = personToAdd[0].lastname;
                item.phone = personToAdd[0].phone;
                item.email = personToAdd[0].email;
            }
        });

        this.messageService.add('HeroService: update hero id');
    }

    delete(identifier: number) {
        HEROES.forEach(function (item, index) {
            if (item.id === identifier) {
                HEROES.splice(index, 1);
            }
        })
        this.messageService.add('HeroService: delete hero id' + identifier);
    }
}
