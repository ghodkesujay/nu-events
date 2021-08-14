import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { GenreService } from '../services/genre.service';
import { Event } from '../../app/shared/event.model'

@Component({
  selector: 'app-genre-type',
  templateUrl: './genre-type.component.html',
  styleUrls: ['./genre-type.component.css']
})
export class GenreTypeComponent implements OnInit {

  genre!: any;
  event!: Event;

  currentGenre : any;

  // constructor(private genreService : GenreService,
  //   private route: ActivatedRoute,
  //   private router: Router) { }

    // ngOnInit() {
    // // this.genre =  this.getGenre(this.route.snapshot.paramMap.get('genre'));
    // this.genreService.get(this.route.snapshot.paramMap.get('genre'))
    //     .subscribe(
    //       data => {
    //         this.currentGenre = data;
    //         console.log("data "+this.currentGenre);
    //       },
    //       error => {
    //         console.log(error);
    //       });
    // console.log("this.genre "+this.genre);
    // }
  
    // getGenre(genre:any) {
    //   console.log("genre "+genre);
    //   this.genreService.get(genre)
    //     .subscribe(
    //       data => {
    //         this.currentGenre = data;
    //         console.log("data "+this.currentGenre);
    //       },
    //       error => {
    //         console.log(error);
    //       });
    // }

  //     ngOnInit(): void {
  //   console.log("this.event 2 "+this.event);
  //   this.route.params
  //   .subscribe(
  //     (params: Params)=>{
  //       this.genre = params['genre'];
  //       this.eventService.get(this.genre);
  //       console.log("Event event"+this.event);

  //     }
  //   )
  // }

  selectedEvents :any;

  constructor(private genreService : GenreService) { }

  ngOnInit(): void {
    this.genreService.get(this.genre).subscribe(
        data => {
          this.selectedEvents = data;
        },
        error => {
          console.log(error);
        });
  }
}
