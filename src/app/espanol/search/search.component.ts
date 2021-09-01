import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { EspanolService } from 'src/app/espanol.service';
import { Espanol } from '../interfaces/espanol.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myControl = new FormControl();
  diccionario: Espanol[] = [];
  filteredOptions!: Observable<Espanol[]>;

  palabraSeleccionada!: Espanol;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  constructor(private espanolS: EspanolService){}

  //debería ser de tipo InputEvent
  buscar( event : any){

    if(!event.data)return;

    this.espanolS.getAutocomplete(event.data.trim())
    .subscribe(palabra => this.diccionario = palabra)
    
  }

  private _filter(value: string): Espanol[] {
    const filterValue = value.toLocaleLowerCase();

    return this.diccionario.filter(option => option.palabra.toLowerCase().includes(filterValue));
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent){

    const palabra = event.option.value.toLocaleLowerCase();

    this.espanolS.getPalabraByPalabra( palabra )
      .subscribe( palabra => this.palabraSeleccionada = palabra)
    
  }
}
