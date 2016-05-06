import { Component, OnInit } from '@angular/core';
import { Hero } from './../models/hero';
import { HeroesService } from "./../heroes-service/heroes-service";
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LimitPipe } from '../pipes/limit';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard-component/dashboard-component.html',
  styleUrls: ['app/dashboard-component/dashboard-component.css'],
  pipes: [LimitPipe]
})
export class DashboardComponent implements OnInit { 
    heroes:Array<Hero> = [];
    errorMessage:string;
    
    constructor(
        private router: Router,
        private heroesService: HeroesService) { }
    
    ngOnInit() {
        this.heroesService.getHeroes()
            .subscribe(
                heroes => this.heroes = heroes,
                error => this.errorMessage = <any>error
            );
    }
    
    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}