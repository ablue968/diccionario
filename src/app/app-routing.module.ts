import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { HomeComponent } from './espanol/home/home.component';


const routes: Routes = [
  {path: 'espanol',
  loadChildren:() => import('./espanol/espanol.module').then( m=> m.EspanolModule )},
  {path: 'error', component: ErrorComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
