import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {IHero} from './models/IHero';
import {MessagesService} from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroes = HEROES;

  constructor(private messageService: MessagesService) { }

  getHeroes(): Observable<IHero[]> {
    this.messageService.addMessage('HeroService: fetched heroes');
    return of(this.heroes);
  }

  getHero(id: number): Observable<IHero> {
    this.messageService.addMessage('HeroService: fetched hero with id: ' + id);
    let hero: IHero = this.heroes.find(h => h.id === id);
    return of(hero);
  }
}
