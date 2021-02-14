import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.scss']
})
export class NewcontactComponent implements OnInit {

    hero = {id: -1, firstname: '', lastname: '', email: '', phone: ''};

    constructor(private heroService: HeroService, private messageService: MessageService) { }

    ngOnInit(): void {
        
    }

    addHero() {

      console.log('hero', this.hero);
        // let addedPerson = [
        //     {
        //         "id": -1,
        //         "firstname": "",
        //         "lastname": "Person",
        //         "email": "added@example.com",
        //         "phone": "650 238 8375"
        //     }
        // ]

        let myhero = [
            this.hero
        ];

        this.heroService.add(myhero);
    }

    onSubmit() { 
        // this.submitted = true; 
        console.log('submitted');
    }
}
