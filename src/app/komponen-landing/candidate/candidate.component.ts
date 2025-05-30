import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { candidates } from './data';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent {
  candidates: any;

  constructor() { }

  ngOnInit(): void {
    // Fetch Data
    this.candidates = candidates
  }

  /**
  * Swiper Responsive setting
  */
  public Responsive: SwiperOptions = {
    slidesPerView: 1,
    pagination: true,
    // mousewheel: true,
    navigation: true,
    spaceBetween: 25,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      }
    }
  };
}
