import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroeService: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this.heroeService.getHeroes();
  }

}
interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;

}