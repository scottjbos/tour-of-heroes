import { Component, OnInit } from '@angular/core';
import { RouteSegment, RouteTree, OnActivate } from '@angular/router';
import { Hero } from '../models/Hero';
import { HeroesService } from "../heroes-service/heroes-service";

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail-component/hero-detail-component.html',
  styleUrls: ['app/hero-detail-component/hero-detail-component.css']
})
export class HeroDetailComponent implements OnActivate {
    hero: Hero;
    
    constructor(
        private heroesService: HeroesService) {
    }
    
    routerOnActivate(current: RouteSegment, prev?: RouteSegment,
      currTree?: RouteTree, prevTree?: RouteTree) {
      let id = parseInt(current.getParam('id'));
      this.heroesService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }
    
    goBack() {
        window.history.back();
    }
}
