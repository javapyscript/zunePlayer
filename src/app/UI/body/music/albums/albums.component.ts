import { Component, OnInit } from '@angular/core';
import { TracksDataService } from 'src/app/services/tracks-data.service';
import { ItunesService } from 'src/app/services/itunes.service';
import { PlayerService } from 'src/app/services/player.service';
import { ArtistsService } from 'src/app/services/artists.service';



@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  
})
export class ALBUMSComponent implements OnInit {

  constructor(public tracksData: TracksDataService, public artistsData: ArtistsService,
    public itunes:ItunesService, public player: PlayerService) { }

  ngOnInit() {
    /*if(this.artistsData.currAlbum.collectionId !==0){
      this.artistsData.filteredSongs = this.artistsData.songs.filter(song=>{
        return song.collectionId ==  this.artistsData.currAlbum.collectionId;
      });
    }
    else{
      this.artistsData.filteredSongs = this.artistsData.songs;
    }*/
    this.artistsData.filteredSongs = this.artistsData.songs;
    this.artistsData.filteredAlbums = this.artistsData.albums;
    this.artistsData.currAlbum.collectionId = 0;
  }

  getDelay(ind:Number){
    
  }

}
