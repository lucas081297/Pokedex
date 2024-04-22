import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { PokeData } from './interface';

@Injectable({
  providedIn: 'root'
})
export class PokeDataApiService {

  private url: string = "http://localhost:5045/api/Pokemon";

  constructor(private http: HttpClient) { }

  get apiGetPokemons(): Observable<any> {
    return this.http.get<any>(this.url,{headers:{"Content-type" : "application/json"}}).pipe(
      map(
        res => res
      )
    )
  }

  public apiGetPokemon(id:number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`,{params: {id : id},headers:{"Content-type" : "application/json"}}).pipe(
      map(
        res => res
      )
    )
  }

  public apiEditPokemon(body:PokeData): Observable<any> {
    return this.http.put<any>(`${this.url}/${body.id}`,JSON.stringify(body),{headers:{"Content-type" : "application/json"}}).pipe(
      map(
        res => res
      )
    )
  }
}
