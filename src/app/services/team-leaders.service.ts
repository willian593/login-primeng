import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamLeadersService {
  private teams: Team[] = [
    {
      id: 1,
      nombre: 'Anartz Mugika Ledo',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-angular/anartz-mugika-ledo.jpg',
      redes: '',
      color: '#a6120d',
      logoUrl: 'assets/img/logo/angular.svg',
      framework: 'angular',
    },
    {
      id: 2,
      nombre: 'Bezael Perez',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-angular/bezael-perez.jpg',
      redes: '',
      color: '#a6120d',
      logoUrl: 'assets/img/logo/angular.svg',
      framework: 'angular',
    },
    {
      id: 3,
      nombre: 'Diego Montoya',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-angular/diego-montoya.jpg',
      redes: '',
      color: '#a6120d',
      logoUrl: 'assets/img/logo/angular.svg',
      framework: 'angular',
    },
    {
      id: 4,
      nombre: 'Mayra Rodríguez',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-angular/mayra-rodríguez.jpg',
      redes: '',
      color: '#a6120d',
      logoUrl: 'assets/img/logo/angular.svg',
      framework: 'angular',
    },
    {
      id: 5,
      nombre: 'Micolas Molina',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-angular/micolas-molina.jpg',
      redes: '',
      color: '#a6120d',
      logoUrl: 'assets/img/logo/angular.svg',
      framework: 'angular',
    },
    {
      id: 6,
      nombre: 'Diego Plascencia',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-react/diego-plascencia.jpg',
      redes: '',
      color: '#88dded',
      logoUrl: 'assets/img/logo/react.svg',
      framework: 'react',
    },
    {
      id: 7,
      nombre: 'Lara Diaz',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-react/lara-diaz.jpg',
      redes: '',
      color: '#88dded',
      logoUrl: 'assets/img/logo/react.svg',
      framework: 'react',
    },
    {
      id: 8,
      nombre: 'Lina María Montaño Ramírez',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-react/lina-maría-montaño-ramírez.jpg',
      redes: '',
      color: '#88dded',
      logoUrl: 'assets/img/logo/react.svg',
      framework: 'react',
    },
    {
      id: 9,
      nombre: 'Martin Bavio',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-react/martin-bavio.jpg',
      redes: '',
      color: '#88dded',
      logoUrl: 'assets/img/logo/react.svg',
      framework: 'react',
    },
    {
      id: 10,
      nombre: 'Vanessa Marely',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-react/vanessa-marely.jpg',
      redes: '',
      color: '#88dded',
      logoUrl: 'assets/img/logo/react.svg',
      framework: 'react',
    },
    {
      id: 11,
      nombre: 'Manuel Muños',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-svelte/manuel-muños.jpg',
      redes: '',
      color: '#ff3c00',
      logoUrl: 'assets/img/logo/svelte.svg',
      framework: 'svelte',
    },
    {
      id: 12,
      nombre: 'Marcos Rivas',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-svelte/marcos-rivas.jpg',
      redes: '',
      color: '#ff3c00',
      logoUrl: 'assets/img/logo/svelte.svg',
      framework: 'svelte',
    },
    {
      id: 13,
      nombre: 'Noah Kaufman',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-svelte/noah-kaufman.jpg',
      redes: '',
      color: '#ff3c00',
      logoUrl: 'assets/img/logo/svelte.svg',
      framework: 'svelte',
    },
    {
      id: 14,
      nombre: 'Oscar Barajas',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-svelte/oscar-barajas.jpg',
      redes: '',
      color: '#ff3c00',
      logoUrl: 'assets/img/logo/svelte.svg',
      framework: 'svelte',
    },
    {
      id: 15,
      nombre: 'Silvestre Vivo',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-svelte/silvestre-vivo.jpeg',
      redes: '',
      color: '#ff3c00',
      logoUrl: 'assets/img/logo/svelte.svg',
      framework: 'svelte',
    },
    {
      id: 16,
      nombre: 'Cristopher Paniagua',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-vue/cristopher-paniagua.jpeg',
      redes: '',
      color: '#00c180',
      logoUrl: 'assets/img/logo/vue.svg',
      framework: 'vue',
    },
    {
      id: 17,
      nombre: 'Fernando de la Rosa',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-vue/fernando-de-la-rosa.png',
      redes: '',
      color: '#00c180',
      logoUrl: 'assets/img/logo/vue.svg',
      framework: 'vue',
    },
    {
      id: 18,
      nombre: 'Ignacio Anaya',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-vue/ignacio-anaya.jpeg',
      redes: '',
      color: '#00c180',
      logoUrl: 'assets/img/logo/vue.svg',
      framework: 'vue',
    },
    {
      id: 19,
      nombre: 'Manuel Ojeda',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-vue/manuel-ojeda.jpg',
      redes: '',
      color: '#00c180',
      logoUrl: 'assets/img/logo/vue.svg',
      framework: 'vue',
    },
    {
      id: 20,
      nombre: 'Noemi Leon',
      profesion: 'Web develope',
      img: 'assets/img/team-leaders/team-vue/noemi-leon.jpg',
      redes: '',
      color: '#00c180',
      logoUrl: 'assets/img/logo/vue.svg',
      framework: 'vue',
    },
  ];

  constructor() {}

  getTeams() {
    return this.teams;
  }

  getTeam(idx: string) {
    return this.getTeams[idx];
  }
}

export interface Team {
  id: number;
  nombre: string;
  profesion: string;
  img: string;
  redes: string;
  color: string;
  logoUrl: string;
  framework: string;
}
