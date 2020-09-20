import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html'
})
export class BrowserComponent implements OnInit {
heroes: any[] = [];
termino: string;
  constructor(private activedRoute: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      this.termino = params['term'];
      this.heroes = this.heroesService.buscarHeroe(params['term']);
    });
  }

}
