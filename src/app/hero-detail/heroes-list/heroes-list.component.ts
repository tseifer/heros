import { Component, OnInit } from '@angular/core';
import {IHero} from '../../models/IHero';
import {HeroesService} from '../../heroes.service';
import {MessagesService} from '../../messages.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: IHero[];
  selectedHero: IHero;
  constructor(private heroesService: HeroesService,
              private messageService: MessagesService,
              private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes() {
    this.heroesService.getHeroes()
        .subscribe((data: IHero[]) => this.heroes = data);
  }

  onSelect(hero: IHero) {
    this.selectedHero = hero;
    this.router.navigate(['detail', hero.id])
    this.messageService.addMessage('HerosList: selected: ' + hero.name);
  }

}
