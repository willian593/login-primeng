import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimengModule } from '../modulos/primeng.module';

const pagesModules = [CommonModule, SwiperModule, PrimengModule];

@NgModule({
  declarations: [DashboardComponent],
  imports: [pagesModules],
  exports: [pagesModules],
})
export class PagesModule {}
