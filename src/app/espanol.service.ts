import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Espanol } from './espanol/interfaces/espanol.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspanolService {

  private apiUrl: string = environment.apiUrl

  private ultimasBusquedas: string[] = [];

  constructor( private http: HttpClient) { }

  getPalabras(): Observable<Espanol[]>{
    return this.http.get<Espanol[]>(`${this.apiUrl}/espanol/`)
  }

  getPalabraByPalabra( palabra: string): Observable<Espanol>{
    if(!this.ultimasBusquedas.includes(palabra)){
      this.ultimasBusquedas.unshift( palabra)
      this.ultimasBusquedas = this.ultimasBusquedas.splice(0,10)
      console.log([...this.ultimasBusquedas])
    }
    return this.http.get<Espanol>(`${this.apiUrl}/espanol/${ palabra }`)
  }

  getAutocomplete( palabra : string): Observable<Espanol[]>{
    return this.http.get<Espanol[]>(`${this.apiUrl}/espanol?q=${ palabra }`)
  }

  postPalabra( palabra: Espanol): Observable<Espanol>{
    return this.http.post<Espanol>(`${this.apiUrl}/espanol/`, palabra)
  }
}
