import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { EditComponent } from './edit/edit.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
    { path: 'newcontact', component: NewcontactComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'contact',        component: ContactsComponent },
    { path: '',   redirectTo: '/contact', pathMatch: 'full' },
    { path: '**', component: ContactsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

