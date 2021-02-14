import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
  })
  export class EditComponent implements OnInit {
  

    hero = {id: -1, firstname: '', lastname: '', email: '', phone: ''};


    constructor(private heroService: HeroService, private messageService: MessageService, private route: ActivatedRoute) { }

    ngOnInit() {

        
     
  
    let identifier = this.route.snapshot.params.id;

    let editId: number = +identifier;
    let person = this.heroService.getOne(editId);

    this.hero.id = editId;
    this.hero.firstname = person[0].firstname;
    this.hero.lastname = person[0].lastname;
    this.hero.phone = person[0].phone;
    this.hero.email = person[0].email;

    //console.log('persona',typeof person, person[0]);
    //this.hero = {id: -1, firstname: 'yo', lastname: 'yo', email: 'ad', phone: 'adf'};
            
    }

    addHero() {

      console.log('hero', this.hero);

        let myhero = [
            this.hero
        ];

        this.heroService.update(myhero);
    }

    onSubmit() { 
        // this.submitted = true; 
        console.log('submitted');
    }
}
