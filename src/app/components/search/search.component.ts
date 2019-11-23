import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  search(txt: string) {
    this.loading = true;
    console.log(txt);
    this.spotify.getArtists(txt)
      .subscribe((data: any) => {
        console.log(data);
        this.artists = data;
        this.loading = false;
      });
  }

}
