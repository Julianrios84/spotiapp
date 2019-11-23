import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {

  newMusic: any[] = [];
  loading: boolean;
  error: boolean;
  messageErr: string;

  constructor(private spotify: SpotifyService) { 
    this.error = false;
    this.loading = true;
    this.spotify.getNewReleases()
    .subscribe((data:any) => {
      console.log(data)
      this.newMusic = data;
      this.loading = false;
    }, (err) => {
      this.loading = false;
      this.error = true;
      console.log(err);
      this.messageErr = err.error.error.message;
    });
  }

  ngOnInit() {
    
  }

}
