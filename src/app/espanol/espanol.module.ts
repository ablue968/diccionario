import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspanolRoutingModule } from './espanol-routing.module';

import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { ResultsComponent } from './results/results.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from '../shared/create/create.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
  
    SearchComponent,
    ListComponent,
    ResultsComponent,
    CardComponent,
    HomeComponent,
    CreateComponent,
    UpdateComponent
    
  ],
  imports: [
    CommonModule,
    EspanolRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class EspanolModule { }
