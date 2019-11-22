import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  search(txt: string) {
    console.log(txt);
    this.spotify.getArtist(txt)
      .subscribe((data: any) => {
        console.log(data);
        this.artists = data;
      });
  }

}
