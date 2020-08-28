import {Component, Input, OnInit} from '@angular/core';
import {IHero} from '../models/IHero';
import {HeroesService} from '../heroes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero: IHero;

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('hero-id');
    if (id) {
      this.heroesService.getHero(Number(id))
          .subscribe(hero => this.hero = hero);
    }
  }

}
