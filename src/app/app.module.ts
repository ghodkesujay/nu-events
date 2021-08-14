import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home-page/header/header.component';
import { CarouselComponent } from './home-page/carousel/carousel.component';
import { EventRowComponent } from './home-page/event-row/event-row.component';
import { GenreRowComponent } from './home-page/genre-row/genre-row.component';
import { ArtistRowComponent } from './home-page/artist-row/artist-row.component';
import { EventCardComponent } from './home-page/event-row/event-card/event-card.component';
import { GenreCardComponent } from './home-page/genre-row/genre-card/genre-card.component';
import { HoverDirective } from './directives/hover.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { HomePageComponent } from './home-page/home-page.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventImageComponent } from './event-details/event-image/event-image.component';
import { EventDescriptionComponent } from './event-details/event-description/event-description.component';
import { EventDtlComponent } from './event-details/event-dtl/event-dtl.component';
import { EventRsvpComponent } from './event-details/event-rsvp/event-rsvp.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { EventService } from './services/event.service';
import { FooterComponent } from './home-page/footer/footer.component';
import { GenreTypeComponent } from './genre-type/genre-type.component';
import { GenreService } from './services/genre.service';
import { AllEventCardComponent } from './all-events/all-event-card/all-event-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EventComponent } from './modal/event/event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Sujay
import { AddEventComponent } from './admin/add-event/add-event.component';
import { EventDetailsComponent1 } from './admin/event-details/event-details.component';
import { EventListComponent } from './admin/event-list/event-list.component';

//aditya
import { AddUserComponent } from './user-form/user-form.component';
import { UserService } from './services/user.service';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
//Shiva
import { SignupComponent } from './home-page/signup/signup.component';
import { UserLoginComponent } from './home-page/user-login/user-login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    EventRowComponent,
    GenreRowComponent,
    ArtistRowComponent,
    EventCardComponent,
    GenreCardComponent,
    HoverDirective,
    DropdownDirective,
    HomePageComponent,
    EventDetailsComponent,
    EventImageComponent,
    EventDescriptionComponent,
    EventDtlComponent,
    EventRsvpComponent,
    AllEventsComponent,
    FooterComponent,
    GenreTypeComponent,
    AllEventCardComponent,
    EventComponent,
    //sujay
    AddEventComponent,
    EventDetailsComponent1,
    EventListComponent,
    //aditya
    AddUserComponent,
    OrderConfirmationComponent,
    AdminLoginComponent,
    SignupComponent,
    UserLoginComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventService, GenreService,UserService],
  bootstrap: [AppComponent,
  ]
})
export class AppModule {
}
