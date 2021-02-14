import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.scss']
})
export class NewcontactComponent implements OnInit {

    hero = {id: -1, firstname: '', lastname: '', email: '', phone: ''};

    constructor(private heroService: HeroService, private messageService: MessageService, private route: ActivatedRoute) { }

    ngOnInit() { }

    addHero() {

        console.log('hero', this.hero);

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
