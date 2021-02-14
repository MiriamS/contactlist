import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  selectedContact: Contact;

  contacts: Contact[];

  constructor(private contactService: ContactService, private messageService: MessageService) { }

  ngOnInit() {
    this.getContacts();
  }

  onSelect(contact: Contact): void {
      if (this.selectedContact === contact) {
        this.selectedContact = null;
      } else {
        this.selectedContact = contact;
      }
    
    this.messageService.add(`ContactsComponent: Selected contact id=${contact.id}`);
  }

    deleteContact(personToRemove: object) {
        if(window.confirm("Are you sure to delete " + personToRemove['firstname'] + ' ' + personToRemove['lastname'] + '?')) {
            this.contactService.delete(personToRemove['id']);
        }
    }
 
  getContacts(): void {
    this.contactService.getContacts()
        .subscribe(contacts => this.contacts = contacts);
  }
}
