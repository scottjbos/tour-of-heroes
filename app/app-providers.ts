import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { HeroesService } from "./heroes-service/heroes-service";

export const APP_PROVIDERS = [
    HeroesService, 
    ROUTER_PROVIDERS, 
    HTTP_PROVIDERS
];