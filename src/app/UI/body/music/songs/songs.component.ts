import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SONGSComponent implements OnInit {

  constructor(public artistsData: ArtistsService) { }

  ngOnInit() {
    this.artistsData.filteredSongs = this.artistsData.songs;
    this.artistsData.filteredAlbums = this.artistsData.albums;
    this.artistsData.currAlbum.collectionId = 0;
  }

}
