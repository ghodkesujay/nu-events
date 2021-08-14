import { Component, OnInit } from '@angular/core';
import { Event } from '../../shared/event.model'
import { EventService } from '../../services/event.service'

@Component({
  selector: 'app-event-row',
  templateUrl: './event-row.component.html',
  styleUrls: ['./event-row.component.css'],

})
export class EventRowComponent implements OnInit {

  events!: Event[];
  even: any = []

  constructor(private eventservice: EventService) { }

  // ngOnInit(): void {
  //   this.events = this.eventservice.getEvents();
  //   console.log("this.events 1 "+this.events);
  // }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials() {
    this.eventservice.getEvents()
      .subscribe(
        data => {
          this.even = data;
          console.log("heelo " + data);
          console.log("even " + this.even);
        },
        error => {
          console.log(error);
        });
  }

}
