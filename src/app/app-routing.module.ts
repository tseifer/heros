import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesListComponent} from './hero-detail/heroes-list/heroes-list.component';


const routes: Routes = [
  {path: "detail/:hero-id", component: HeroDetailComponent},
  {path: "", component: HeroesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
