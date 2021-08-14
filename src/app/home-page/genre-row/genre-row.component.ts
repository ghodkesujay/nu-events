import { Component, OnInit } from '@angular/core';
import { Genre } from '../../shared/genre.modal';

@Component({
  selector: 'app-genre-row',
  templateUrl: './genre-row.component.html',
  styleUrls: ['./genre-row.component.css']
})
export class GenreRowComponent implements OnInit {

  genres : Genre[] = [
    new Genre('Poetry','assets/poetry.jpeg'),
    new Genre('SPorts','/assets/sports.jpg'),
    new Genre("Drama","/assets/drama.png"),
    new Genre("Music","/assets/music.jpeg"),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
