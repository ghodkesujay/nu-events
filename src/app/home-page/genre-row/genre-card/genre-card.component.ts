import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { GenreService } from 'src/app/services/genre.service';
import { Genre } from 'src/app/shared/genre.modal';
import { Event } from '../../../shared/event.model'

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.css']
})
export class GenreCardComponent implements OnInit {

  @Input()
  genre!: Genre;

  @Input()
  event!: Event;

  constructor(private genreService : GenreService,private router: Router) { }

  ngOnInit(): void {
    
  }

}
