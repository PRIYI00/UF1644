import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Noticia } from '../model/noticia';

@Injectable({
    providedIn: 'root'
  })
export class NoticiasService {
    constructor(private http: HttpClient) { 
        console.debug("NoticiasService Constructor");
    } // Constructor

    getAllNoticias(): Observable<Noticia[]> {
        const url = `http://localhost:3000/noticias`;
        console.debug("NoticiasService getAllNoticias " + url);
        return this.http.get<Noticia[]>(url);
    }    

    createNoticia(noticia: Noticia): Observable<Noticia> {
        const url = `http://localhost:3000/noticias`;
        console.debug("PokemonService createPokemon " + url);
        return this.http.post<Noticia>(url, noticia);
    }
}