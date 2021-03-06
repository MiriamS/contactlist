import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

    contact = { id: -1, firstname: '', lastname: '', email: '', phone: '' };
    data: string;
    addOrUpdate: string;
    person: object;

    constructor(private contactService: ContactService, private route: ActivatedRoute) { }

    ngOnInit() {

        let identifier = this.route.snapshot.params.id;
        let editId: number = +identifier;
        let person = this.contactService.getOne(editId);

        this.contact.id = editId;
        this.contact.firstname = person[0].firstname;
        this.contact.lastname = person[0].lastname;
        this.contact.phone = person[0].phone;
        this.contact.email = person[0].email;

        this.addOrUpdate = "edit";
        this.person = this.contact;
    }
}
