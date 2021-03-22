import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { CarouselSponsorComponent } from './pages/carousel-sponsor/carousel-sponsor.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';

const routes: Routes = [
  { path: 'carousel', component: CarouselComponent },
  { path: 'carousel-sponsor', component: CarouselSponsorComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: '**', pathMatch: 'full', redirectTo: `login` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
