import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  getMovieByName(name: string) {
    const url = 'http://www.omdbapi.com/?s=' + name + '&type=movie&apikey=defad1c4';
    return this.http.get(url);
  }

  getMovieById(id: string) {
    const url = 'http://www.omdbapi.com/?i=' + id + '&apikey=defad1c4';
    return this.http.get(url);
  }
}
