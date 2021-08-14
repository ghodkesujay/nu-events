import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  //declarations

  id!: number;
  events: any;
  currentTutorial: any;
  currentIndex = -1;
  title = '';
  
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

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.retrieveEvents();
  }

  retrieveEvents(){
    this.eventService.getEvents()
      .subscribe(
        data => {
          this.events = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveEvents();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

  setActiveEvent(event: null, index: number) {
    this.currentTutorial = event;
    this.currentIndex = index;
  }

  removeAllEvents() {
    this.eventService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle() {
    this.eventService.findByTitle(this.title)
      .subscribe(
        data => {
          this.events = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}
