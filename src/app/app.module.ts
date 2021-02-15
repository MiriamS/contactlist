import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditComponent } from './edit/edit.component';
import { ContactformComponent } from './contactform/contactform.component';


@NgModule({
    declarations: [
        AppComponent,
        NewcontactComponent,
        ContactsComponent,
        EditComponent,
        ContactformComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
