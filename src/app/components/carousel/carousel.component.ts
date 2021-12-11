import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  constructor() {}
  images = [
    '../assets/carouselImages/carousel1.jpeg',
    '../assets/carouselImages/carousel1.jpeg',
  ];
  ngOnInit(): void {}
}
