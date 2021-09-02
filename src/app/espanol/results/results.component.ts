import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { EspanolService } from 'src/app/espanol.service';
import { Espanol } from '../interfaces/espanol.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  palabra!: Espanol;

  constructor( private activatedRoute: ActivatedRoute, private espanolS: EspanolService) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({palabra})=> this.espanolS.getPalabraByPalabra( palabra ) )
    )
      .subscribe( palabra=> this.palabra = palabra)

  }

  update( palabra : string){
    console.log(palabra)
  }

}
