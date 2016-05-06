import { Component, OnInit } from '@angular/core';
import { Hero } from './../models/hero';
import { HeroesService } from "./../heroes-service/heroes-service";
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard-component/dashboard-component.html',
  styleUrls: ['app/dashboard-component/dashboard-component.css']
})
export class DashboardComponent implements OnInit { 
    heroes: Hero[] = [];
    
    constructor(
        private router: Router,
        private heroesService: HeroesService) { }
    
    ngOnInit() {
        this.heroesService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1,5));
    }
    
    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}