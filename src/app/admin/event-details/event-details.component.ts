import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent1 implements OnInit {
  

  id!: number;
  event!: Event;
  

  currentTutorial : any;
  message = '';

  constructor(private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getEvent(this.route.snapshot.paramMap.get('id'));
  }

  getEvent(id:any) {
    this.eventService.get(id)
      .subscribe(
        data => {
          this.currentTutorial = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: any) {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };

    this.eventService.update(this.currentTutorial.id, data)
      .subscribe(
        response => {
          this.currentTutorial.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateEvent() {
    this.eventService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The event was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteEvent() {
    this.eventService.delete(this.currentTutorial.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/admineventlist']);
        },
        error => {
          console.log(error);
        });
  }


}
