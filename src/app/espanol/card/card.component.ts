import { Component, Input } from '@angular/core';
import { Espanol } from '../interfaces/espanol.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

  @Input() palabra!: Espanol;

  constructor() { }

 
}
