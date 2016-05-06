import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../data/mock-heroes';
import { Http } from '@angular/http';

@Injectable()
export class HeroesService {
  
  private API_URL:string = 'http://localhost:3000/app/data'
  
  constructor(private http: Http) {}

  getHeroes() {
    return this.http.get(`${this.API_URL}/mock-heroes.json`)
        .map(res => res.json());
  }
  
  getHero(id: number) {
    return this.http.get(`${this.API_URL}/mock-heroes.json`)
        .map(res => {
          let heroes:Array<Hero> = res.json();
          let filtered = heroes.filter(hero => hero.id === id)[0];
          return filtered;
        })
  }
  
  getHeroesPromise():Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  
  getHeroPromise(id: number):Promise<Hero> {
    return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );
  }

  getHeroesSlowly():Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    );
  }
}
