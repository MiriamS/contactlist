import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../contact.service';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { NewcontactComponent } from '../newcontact/newcontact.component';

@Component({
    selector: 'app-contactform',
    templateUrl: './contactform.component.html',
    styleUrls: ['./contactform.component.scss']
  })
  export class ContactformComponent implements OnInit {

    @Input() addOrUpdate;
    @Input("person") contact;

    updateContacts() {
        let mycontact = [
            this.contact
        ];
        if (this.addOrUpdate === 'add') {
            this.contactService.add(mycontact);
        } else {
            this.contactService.update(mycontact);
        }
    }

    constructor(private contactService: ContactService, private messageService: MessageService) { }

    ngOnInit() {}

    onSubmit() {
        // this.submitted = true; 
        console.log('submitted');
    }
}
