import {Injectable} from '@angular/core';
import {Chirp} from "./chirp";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ChirpService {
  // chirps: Chirp[] = [];
  //URL to WebAPI
  private chirpsUrl = 'http://localhost:3000/chirps';

  //GET chirps from the server
  getChirps(): Observable<Chirp[]> {
    return this.httpClient.get<Chirp[]>(this.chirpsUrl)
      .pipe(
        tap(_ => this.log('fetching chirps')),
        catchError(this.handleError('getChirps',[]))
      );
  }

  constructor(private httpClient: HttpClient) {
  }



  addChirp(chirp: Chirp) {
    // this.chirps.push(chirp);
  }

  removeChirp(chirp: Chirp) {
    // this.chirps = this.chirps.filter(x => x.text !== chirp.text);
  }



  private log(message: string) {
    console.log(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      this.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
