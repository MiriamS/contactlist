import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CONTACTS } from '../mock-contacts';

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styleUrls: ['./listpage.component.scss']
})
export class ListpageComponent implements OnInit {
    
    contacts = CONTACTS;

  constructor() { }

  ngOnInit(): void {

    
  }

}
