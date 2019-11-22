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
      'Authorization': 'Bearer BQDMQMYbab0FUTcM6yucTxrjIs3uTWzu04vdM6Cv44hrN6Tg6_TFZx57u5CsdWIDTP_sFrcOygDeuipgV3g'
    });

    return this.http.get(url, {headers})
  }

  

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => {
        return data['albums'].items;
      }))
  }

  getArtist(txt: string) {
    return this.getQuery(`search?q=${txt}"&type=artist&limit=15`)
      .pipe(map(data => {
        return data['artists'].items;
      }))
  }
}
