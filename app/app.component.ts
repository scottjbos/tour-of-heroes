import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { HeroesComponent } from './heroes-component/heroes.component';
import { HeroDetailComponent } from './hero-detail-component/hero-detail-component'
import { DashboardComponent } from './dashboard-component/dashboard-component';
import { HeroesService } from "./heroes-service/heroes-service";

@Component({
  selector: 'my-app',
  styleUrls: ['app/app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['/dashboard']">Dashboard</a>
        <a [routerLink]="['/heroes']">Heroes</a>
    </nav>
    <!-- Routed views go here -->
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroesService, ROUTER_PROVIDERS]
})
@Routes([
  { path: '/heroes', component: HeroesComponent },
  { path: '/dashboard', component: DashboardComponent },
  { path: '/detail/:id', component: HeroDetailComponent }
])
export class AppComponent {
  title = 'Tour of Heroes';
}
