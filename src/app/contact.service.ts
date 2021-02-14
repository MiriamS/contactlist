import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
})
export class ContactService {

    constructor(private messageService: MessageService) { }

    getContacts(): Observable<Contact[]> {
        let contacts = of(CONTACTS);
        this.messageService.add('ContactService: fetched contacts');
        return contacts;
    }

    getOne(identifier: number) {
        let contact = [];
        CONTACTS.forEach(function (item) {
            if (item.id === identifier) {
                contact.push(item);
            }
        })
        return contact;
        this.messageService.add('ContactService: getting one ' + identifier);
    }

    add(personToAdd: object) {

        // increment id
        if (personToAdd[0].id === -1) {
            let highestId = -1;

            CONTACTS.forEach(function (item, index) {
                if (item.id > highestId) {
                    highestId = item.id;
                }
            });

            highestId++;
            personToAdd[0].id = highestId;
        }

        CONTACTS.push(personToAdd[0]);

        this.messageService.add('ContactService: add contacts');
    }

    update(personToAdd: object) {

        CONTACTS.forEach(function (item, index) {
            if (item.id === personToAdd[0].id) {
                item.firstname = personToAdd[0].firstname;
                item.lastname = personToAdd[0].lastname;
                item.phone = personToAdd[0].phone;
                item.email = personToAdd[0].email;
            }
        });

        this.messageService.add('ContactService: update contact id');
    }

    delete(identifier: number) {
        CONTACTS.forEach(function (item, index) {
            if (item.id === identifier) {
                CONTACTS.splice(index, 1);
            }
        })
        this.messageService.add('ContactService: delete contact id' + identifier);
    }
}
