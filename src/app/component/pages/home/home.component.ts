import { Component, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  ngOnInit() {
    // Initialize the carousel
    setTimeout(() => {
      const carouselElement = document.getElementById('homeCarousel');
      if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
          interval: 5000,
          wrap: true
        });
      }
    }, 100);
  }
}
