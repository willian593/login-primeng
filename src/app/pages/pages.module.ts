import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselSponsorComponent } from './carousel-sponsor/carousel-sponsor.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
  declarations: [CarouselComponent, CarouselSponsorComponent],
  imports: [CommonModule, SwiperModule],
  exports: [CarouselComponent, CarouselSponsorComponent],
})
export class PagesModule {}
