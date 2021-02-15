import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../contact.service';
import { MessageService } from '../message.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewcontactComponent } from '../newcontact/newcontact.component';

@Component({
    selector: 'app-contactform',
    templateUrl: './contactform.component.html',
    styleUrls: ['./contactform.component.scss']
  })
  export class ContactformComponent implements OnInit {

    //contact = { id: -1, firstname: '', lastname: '', email: '', phone: '' };
    @Input() parentData;
    @Input("data") modifiedName;
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

    constructor(private contactService: ContactService, private messageService: MessageService, private route: ActivatedRoute) { }

    ngOnInit() { 
        console.log("This is the parent data", this.parentData);
        console.log("This is the parent data", this.modifiedName);
        console.log("This is addOrUpdate", this.addOrUpdate);
        console.log("This is contact", this.contact);
    }

    onSubmit() {
        // this.submitted = true; 
        console.log('submitted');
    }
}
