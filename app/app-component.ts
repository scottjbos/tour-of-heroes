import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { HeroesComponent } from './heroes-component/heroes.component';
import { HeroDetailComponent } from './hero-detail-component/hero-detail-component'
import { DashboardComponent } from './dashboard-component/dashboard-component';
import { APP_PROVIDERS } from './app-providers';
import 'rxjs/add/operator/map';
//import 'rxjs/Rx'; // load the full rxjs

@Component({
  selector: 'my-app',
  styleUrls: ['app/app-component.css'],
  templateUrl: 'app/app-component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [APP_PROVIDERS]
})
@Routes([
  { path: '/heroes', component: HeroesComponent },
  { path: '/dashboard', component: DashboardComponent },
  { path: '/detail/:id', component: HeroDetailComponent }
])
export class AppComponent {
  title = 'Tour of Heroes';
}
