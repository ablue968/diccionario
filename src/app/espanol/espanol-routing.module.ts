import { NgModule } from '@angular/core';

import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '', 
    component: HomeComponent,
    children: [
    {path: ':palabra', component: ResultsComponent , pathMatch: 'full'},
    {path: '', component: ListComponent}, 
    {path:'**', redirectTo : ''}
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspanolRoutingModule { }
