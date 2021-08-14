import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';
import { Subscription } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { EventService } from '../services/event.service';
import * as moment from 'moment'

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AllEventsComponent implements OnInit {

  events!: any[];
  filteredEvent!: any[]

  filterControl = new FormControl();
  subscription!: Subscription

  categories = new Set()

  constructor(private eventservice: EventService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
    this.subscription = this.filterControl.valueChanges.pipe(
      debounceTime(400),
      tap(value => {
        if (!this.events) return
        this.filteredEvent = this.events.filter(event => event.evname.toLowerCase().includes(value.toLowerCase()))
      })
    ).subscribe()
  }

  retrieveTutorials() {
    this.eventservice.getEvents()
      .subscribe(
        data => {
          this.filteredEvent = data;
          this.events = data
          this.events.map(event => this.categories.add(event.genre))
        },
        error => {
          console.log(error);
        });
  }


  daySelectionChange(event: MatRadioChange) {
    if (!event.value) {
      this.filteredEvent = this.events
      return
    }

    const now = moment()
    if (event.value == 'weekend') {
      const saturday = now.endOf('week')
      const sunday = saturday.subtract(1, 'day')

      this.filteredEvent = this.events.filter(ev => {
        const date = moment(ev.date)
        if (date.isBetween(saturday, sunday)) return true
        return false
      })
      return
    }

    this.filteredEvent = this.events.filter(ev => now.add(1, 'day').isSame(moment(ev.date)))

  }

  categoryChange(event: MatSelectChange) {
    if (event.value)
      this.filteredEvent = this.events.filter(ev => ev.genre == event.value)
    else this.filteredEvent = this.events
  }
}
