import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {
heroe: Heroe;
  constructor(private activiteRoute: ActivatedRoute, private heroresService: HeroesService) {
    this.activiteRoute.params.subscribe(params => {
console.log(params['id']);
this.heroe = heroresService.getHeroe(params['id']);
console.log(this.heroe);
    });
   }


}
interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;

}
