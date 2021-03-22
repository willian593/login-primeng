import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SponsorService {
  private sponsors: Sponsor[] = [
    {
      id: 1,
      nombre: 'Huawei',
      img: 'assets/img/sponsor/Huawei.jpg',
    },
    {
      id: 2,
      nombre: 'fernando-herrera',
      img: 'assets/img/sponsor/fernando-herrera.jpg',
    },
    {
      id: 3,
      nombre: 'codely',
      img: 'assets/img/sponsor/codely.jpg',
    },
    {
      id: 4,
      nombre: 'codigo-facilito',
      img: 'assets/img/sponsor/codigo-facilito.jpg',
    },
    {
      id: 5,
      nombre: 'domini-code',
      img: 'assets/img/sponsor/domini-code.jpg',
    },
    {
      id: 6,
      nombre: 'egghead',
      img: 'assets/img/sponsor/egghead.jpg',
    },
    {
      id: 7,
      nombre: 'jose-dimas-lujan',
      img: 'assets/img/sponsor/jose-dimas-lujan.jpg',
    },
    {
      id: 8,
      nombre: 'latam-dev',
      img: 'assets/img/sponsor/latam-dev.jpg',
    },
    {
      id: 9,
      nombre: 'leonidas-esteban',
      img: 'assets/img/sponsor/leonidas-esteban.jpg',
    },
    {
      id: 10,
      nombre: 'tekki',
      img: 'assets/img/sponsor/tekki.jpg',
    },
    {
      id: 11,
      nombre: 'stackly-code',
      img: 'assets/img/sponsor/stackly-code.jpg',
    },
  ];

  constructor() {}

  getSponsors() {
    return this.sponsors;
  }

  getSponsor(idx: string) {
    return this.getSponsors[idx];
  }
}

export interface Sponsor {
  id: number;
  nombre: string;
  img: string;
}
