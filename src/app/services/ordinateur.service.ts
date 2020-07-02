import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
// import { retry} from 'rxjs/internal/operators';
// import { catchError,retry } from 'rxjs/operators';
import { Ordinateur } from '../models/ordinateur';

import {catchError, retry} from 'rxjs/internal/operators';



@Injectable({
  providedIn: 'root'
})
export class OrdinateurService {
  dateJour=new Date();
  marqueOrdinateur = ['Dell', 'HP', 'Apple','Asus'];
  typeOrdinateur = ['Portable', 'Fixe', 'Tablette hybride'];

  constructor(private http:HttpClient) { }

  apiURL = 'http://localhost:3000/ordinateur';
    httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  };


  getAllOrdis(): Observable<Ordinateur[]> {
    return this.http.get<Ordinateur[]>(this.apiURL,this.httpOptions).pipe(
    retry(1),
    // catchError(this.handleError)
    );
    }


  getById(id: number): Observable<Ordinateur> {
      return this.http.get<Ordinateur>(this.apiURL + '/' + id,this.httpOptions)
      .pipe(
      retry(1),
      // catchError(this.handleError)
      );
      }

  ajoutOrdinateur(ordinateur: Ordinateur): Observable<Ordinateur> {
       ordinateur.dateEntreeStock = this.dateJour;
       return this.http.post<Ordinateur>(this.apiURL ,ordinateur, this.httpOptions).pipe(
        retry(1)
      //  catchError(this.handleError)
       );
     }



     

  deleteOrdinateur(id: number): Observable<Ordinateur> {
      //  console.log("delete ",id);
    return this.http.delete<Ordinateur>(this.apiURL + '/' + id)
    .pipe(
    retry(1),
    // catchError(this.handleError)
    );
    }

    majOrdinateur(ordinateur: Ordinateur) {
      return this.http.put<Ordinateur>(this.apiURL + '/' + ordinateur.id ,ordinateur, this.httpOptions).pipe(
        retry(1),
        // catchError(this.handleError)
      );
      }
}
