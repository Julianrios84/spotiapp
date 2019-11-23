import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styles: []
})
export class ArtistComponent {
  artist: any = {};
  tracks: any[] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtist(params["id"]);
      this.getTopTracks(params["id"]);
    });
  }

  getArtist(txt: string) {
    this.spotify.getArtist(txt).subscribe(artist => {
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks(txt: string) {
    this.spotify.getTopTracks(txt).subscribe(tracks => {
      console.log(tracks);
      this.tracks = tracks;
    });
  }
}
