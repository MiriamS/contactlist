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

    // person = {
    //     "firstname": "start",
    //     "lastname": "",
    //     "email": "",
    //     "phone": ""
    // }

    // person: Object = {};
    // firstname: string = "";
    lastname: string = "yo";
    // phone: string = "";
    // email: string = "";

    hero = {firstname: 'Dr.', lastname: '', email: 'some@email.com', phone: '234567'};

    constructor(private heroService: HeroService, private messageService: MessageService) { }

    ngOnInit(): void {}

    addHero() {

        let addedPerson = [
            {
                "firstname": "Added",
                "lastname": "Person",
                "email": "added@example.com",
                "phone": "650 238 8375"
            }
        ]
        this.heroService.add(addedPerson);
    }

    onSubmit() { 
        // this.submitted = true; 
    }
}
