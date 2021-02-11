import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { ListpageComponent } from './listpage/listpage.component';

const routes: Routes = [
    { path: 'newcontact', component: NewcontactComponent },
    { path: 'list',        component: ListpageComponent },
    { path: '',   redirectTo: '/list', pathMatch: 'full' },
    { path: '**', component: ListpageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
