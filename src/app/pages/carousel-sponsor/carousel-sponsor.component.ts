import { Component, OnInit } from '@angular/core';
import { Sponsor, SponsorService } from '../../services/sponsor.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-carousel-sponsor',
  templateUrl: './carousel-sponsor.component.html',
  styleUrls: ['./carousel-sponsor.component.css'],
})
export class CarouselSponsorComponent implements OnInit {
  sponsors: Sponsor[] = [];
  constructor(private sponsorServ: SponsorService) {}

  public config: SwiperConfigInterface = {
    spaceBetween: 10,
    pagination: { el: '.swiper-pagination', clickable: true },
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
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

  ngOnInit(): void {
    this.sponsors = this.sponsorServ.getSponsors();
  }
}
