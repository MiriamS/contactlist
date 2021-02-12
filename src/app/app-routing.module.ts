import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { ListpageComponent } from './listpage/listpage.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
    { path: 'newcontact', component: NewcontactComponent },
    { path: 'list',        component: ListpageComponent },
    { path: 'hero',        component: HeroesComponent },
    { path: '',   redirectTo: '/list', pathMatch: 'full' },
    { path: '**', component: ListpageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

