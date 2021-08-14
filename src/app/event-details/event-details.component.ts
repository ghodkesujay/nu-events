import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../../app/shared/event.model'



@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  id!: number;
  event!: Event;

  currentEvent : any;
  message = '';

  constructor(private eventService : EventService,
              private route: ActivatedRoute,
              private router: Router) { }

  // ngOnInit(): void {
  //   console.log("this.event 2 "+this.event);
  //   this.route.params
  //   .subscribe(
  //     (params: Params)=>{
  //       this.id = +params['id'];
  //       this.event.id = this.eventService.get(this.id);
  //       console.log("Event event"+this.event.evname);

  //     }
  //   )
  // }

  ngOnInit() {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id:any) {
    this.eventService.get(id)
      .subscribe(
        data => {
          this.currentEvent = data;
          console.log("data"+this.currentEvent);
        },
        error => {
          console.log(error);
        });
  }

}
