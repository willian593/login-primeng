import { Component, OnInit } from '@angular/core';
import { TeamLeadersService, Team } from '../../services/team-leaders.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  teams: Team[] = [];

  // slides = Array.from({ length: 1000 }).map(
  //   (el, index) => `Slide ${index + 1}`
  // );

  public config: SwiperConfigInterface = {
    pagination: { el: '.swiper-pagination', clickable: true },
    // spaceBetween: 10,
    // autoplay: {
    //   delay: 6000,
    //   disableOnInteraction: true,
    // },
    direction: 'horizontal',
    breakpoints: {
      1024: {
        slidesPerView: 5,
      },
      500: {
        slidesPerView: 3,
      },
      400: {
        slidesPerView: 2,
      },
      300: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  };

  constructor(private teamServi: TeamLeadersService) {}

  ngOnInit(): void {
    this.teams = this.teamServi.getTeams();
  }

  // onSwiper(swiper) {
  //   console.log(swiper);
  // }
  // onSlideChange() {
  //   console.log('slide change');
  // }
}
