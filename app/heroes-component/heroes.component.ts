import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './../models/hero';
import { HeroDetailComponent } from "./../hero-detail-component/hero-detail-component";
import { HeroesService } from "./../heroes-service/heroes-service";
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-heroes',
    styleUrls: ['app/heroes-component/heroes.component.css'],
    templateUrl: 'app/heroes-component/heroes-component.html',
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {

  constructor(
    private router: Router,
    private heroesService: HeroesService) {}

  heroes: Observable<Array<Hero>>;

  selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }

  ngOnInit():any {
    this.heroes = this.heroesService.getHeroes();
  }
  
  gotoDetail(hero: Hero) {
        let link = ['/detail', this.selectedHero.id];
        this.router.navigate(link);
    }
}

