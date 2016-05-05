import { Component,OnInit } from '@angular/core';
import { Hero } from './models/Hero';
import {HeroDetailComponent} from "./hero-detail-component/hero-detail-component";
import {HeroesService} from "./heroes-service/heroes-service";


@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    directives: [HeroDetailComponent],
    providers: [HeroesService],
    template:`
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class="heroes">
          <li *ngFor="let hero of heroes" 
              (click)="onSelect(hero)" 
              [class.selected]="hero === selectedHero">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
          </li>
        </ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `
})
export class AppComponent implements OnInit {

  constructor(private heroesService: HeroesService) {}

  heroes: Hero[];

  title = 'Tour of Heroes';
  selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }

  ngOnInit():any {
    this.heroesService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }
}

