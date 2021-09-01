import { Component, OnInit } from '@angular/core';
import { EspanolService } from '../../espanol.service';
import { Espanol } from '../interfaces/espanol.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  arrEspanol : Espanol[] = [];
  constructor(private espanolS: EspanolService) { }

  ngOnInit(): void {

    this.espanolS.getPalabras()
      .subscribe( resp => this.arrEspanol = resp )
  }

  diccionario( palabra: string){
    console.log(palabra);
  }

}
