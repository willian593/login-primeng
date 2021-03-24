import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
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

// firebase
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

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
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
