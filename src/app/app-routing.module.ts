import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEventsComponent } from './all-events/all-events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { GenreTypeComponent } from './genre-type/genre-type.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddEventComponent } from './admin/add-event/add-event.component';
import { EventListComponent } from './admin/event-list/event-list.component';
import { EventDetailsComponent1 } from './admin/event-details/event-details.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { AddUserComponent } from './user-form/user-form.component';

import { UserLoginComponent } from './home-page/user-login/user-login.component';
import { SignupComponent } from './home-page/signup/signup.component';
import { AdminAuthGuard } from './services/admin-auth.guard';
import { AuthGuard } from './services/auth.guard.';


const routes: Routes = [
  {   path : '', redirectTo:'/home-page', pathMatch:'full'},
  {   path : 'home-page', component: HomePageComponent,canActivate: [AuthGuard]},
  {   path : 'events', component : AllEventsComponent,canActivate: [AuthGuard]},
  {   path : 'events/:id', component : EventDetailsComponent,canActivate: [AuthGuard]},
  {   path : 'genre', component: GenreTypeComponent, children : [
    {   path : ':genre', component : EventDetailsComponent,canActivate: [AuthGuard]} 
    ]},

  //sujay
  { path : 'admin', component: AddEventComponent, canActivate: [AdminAuthGuard]},
  { path : 'admineventlist', component: EventListComponent,canActivate: [AdminAuthGuard]},
  { path : 'admineventlist/:id', component: EventDetailsComponent1,canActivate: [AdminAuthGuard]},

  //aditya
  {   path : 'user-form', component : AddUserComponent,canActivate: [AuthGuard]},
  {   path : 'order-confirmation', component : OrderConfirmationComponent,canActivate: [AuthGuard]},

  //Shiva
  { path: 'login', component: UserLoginComponent },
  { path: 'signup', component: SignupComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
