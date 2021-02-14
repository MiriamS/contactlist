import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { ListpageComponent } from './listpage/listpage.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NewcontactComponent,
    ListpageComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    EditComponent,
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
