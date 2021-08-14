import { Component, OnInit } from '@angular/core';
//import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  //providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers 
  
})
export class CarouselComponent implements OnInit {

  images = ["/assets/bhm-newsannouncement.png", "/assets/event2.png", "/assets/event4.jpg"];

  constructor() { }

  ngOnInit(): void {
  }

}
