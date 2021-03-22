import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// componets
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
// primeng
import { PrimengModule } from './modulos/primeng.module';
// carousell
import { SwiperModule } from 'ngx-swiper-wrapper';
// auth
import { AuthenticationModule } from './pages/authentication/authentication.module';
// pages
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SwiperModule,
    PrimengModule,
    AuthenticationModule,
    PagesModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
