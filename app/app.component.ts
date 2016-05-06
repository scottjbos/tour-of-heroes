import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { HeroesComponent } from './heroes-component/heroes.component';
import { HeroDetailComponent } from './hero-detail-component/hero-detail-component'
import { DashboardComponent } from './dashboard-component/dashboard-component';
import { HeroesService } from "./heroes-service/heroes-service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  styleUrls: ['app/app-component.css'],
  templateUrl: 'app/app-component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroesService, ROUTER_PROVIDERS, HTTP_PROVIDERS]
})
@Routes([
  { path: '/heroes', component: HeroesComponent },
  { path: '/dashboard', component: DashboardComponent },
  { path: '/detail/:id', component: HeroDetailComponent }
])
export class AppComponent {
  title = 'Tour of Heroes';
}
