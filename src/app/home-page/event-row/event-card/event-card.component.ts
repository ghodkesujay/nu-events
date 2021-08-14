import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../../shared/event.model'
import { EventService } from 'src/app/services/event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input()
  event!: Event;
  @Input()
  index!: number;
  

  constructor(private eventService : EventService,
    private router: Router) { 
    
  }

  ngOnInit(): void {
    console.log("index "+this.index);
    
  }


}
