import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify service conect!');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCx10EGBDm__nqzQKwEHYckkJ9pL-Q6nIAPZ23hPr0gFY_8vZIBbkKC_LHD1j_7JaPxLOHVCpRKdfA3pNA'});

    return this.http.get(url, {headers})
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => {
        return data['albums'].items;
      }))
  }

  getArtists(txt: string) {
    return this.getQuery(`search?q=${txt}"&type=artist&limit=15`)
      .pipe(map(data => {
        return data['artists'].items;
      }))
  }

  getArtist(txt: string) {
    return this.getQuery(`artists/${txt}`)
  }

  getTopTracks(txt: string) {
    console.log('service txt: ', txt);
    return this.getQuery(`artists/${txt}/top-tracks?country=us`)
      .pipe(map(data => {
        return data['tracks'];
      }))
  }
}
