import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EventComponent } from 'src/app/modal/event/event.component';
import { Event } from '../../shared/event.model';

@Component({
  selector: 'app-all-event-card',
  templateUrl: './all-event-card.component.html',
  styleUrls: ['./all-event-card.component.css']
})
export class AllEventCardComponent implements OnInit {

  @Input() event!: Event
  @Input() index!: number

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    console.log("index " + this.index);
  }


  openEventDetail() {
    const dialogConfig = new MatDialogConfig()

    dialogConfig.disableClose = true
    dialogConfig.height = '400px'
    dialogConfig.width = '650px'
    dialogConfig.data = this.event
    this.matDialog.open(EventComponent, dialogConfig)

  }

}
