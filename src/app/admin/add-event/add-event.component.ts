import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  event = {
    evname: '',
    cardImageUrl: '',
    location: '',
    description: '',
    date: '',
    genre: '',
    price: '',
    artist : '',
    published: false
  };
  submitted = false;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  saveEvent() {
    const data = {
      evname: this.event.evname,
      cardImageUrl: this.event.cardImageUrl,
      location: this.event.location,
      description: this.event.description,
      date: this.event.date,
      genre: this.event.genre,
      price: this.event.price,
      artist: this.event.artist
    };

    this.eventService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newEvent() {
    this.submitted = false;
    this.event = {
      evname: '',
      cardImageUrl: '',
      location: '',
      description: '',
      date: '',
      genre: '',
      price: '',
      artist : '',
      published: false
    };
  }



}
