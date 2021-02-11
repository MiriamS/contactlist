import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import './mock-contacts.ts';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactcardComponent } from './contactcard/contactcard.component';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { ListpageComponent } from './listpage/listpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactcardComponent,
    NewcontactComponent,
    ListpageComponent
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
