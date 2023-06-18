import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactsDetailsComponent } from './components/contacts-details/contacts-details.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DetailsComponent } from './components/contacts/components/details/details.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ContactsComponent,
    ContactsDetailsComponent,
    AdminDashboardComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
