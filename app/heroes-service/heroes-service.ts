import { Injectable } from '@angular/core';
import { Hero } from "../models/hero";
import { HEROES } from "../data/mock-heroes";

@Injectable()
export class HeroesService {

  getHeroes():Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  
  getHero(id: number):Promise<Hero> {
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
