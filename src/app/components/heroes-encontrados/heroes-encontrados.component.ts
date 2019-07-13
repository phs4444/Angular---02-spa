import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NavbarComponent } from '../shared/navbar/navbar.component';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroes-encontrados',
  templateUrl: './heroes-encontrados.component.html'
})
export class HeroesEncontradosComponent implements OnInit {

  private heroes: any[] = [];
  private termino: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
    })
  }
  
  verHeroe(nombre: string) {
    this.router.navigate(['/heroes', nombre]);
  }

}
