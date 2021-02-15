import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
    selector: 'app-newcontact',
    templateUrl: './newcontact.component.html',
    styleUrls: ['./newcontact.component.scss']
})
export class NewcontactComponent implements OnInit {

    contact = { id: -1, firstname: '', lastname: '', email: '', phone: '' };
    addOrUpdate: string;
    person: object;

    addContact() {
        let mycontact = [
            this.contact
        ];
        this.contactService.add(mycontact);
    }

    constructor(private contactService: ContactService) { }

    ngOnInit() {
        this.addOrUpdate = "add";
        this.person = this.contact;
    }
}
