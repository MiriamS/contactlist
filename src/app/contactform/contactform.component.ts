import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../contact.service';

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

    constructor(private contactService: ContactService) { }

    ngOnInit() {}

    onSubmit() {
        // this.submitted = true; 
        console.log('submitted');
    }
}
