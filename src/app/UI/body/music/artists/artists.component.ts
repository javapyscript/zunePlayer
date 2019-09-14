import { Component, OnInit } from '@angular/core';
import { TracksDataService } from 'src/app/services/tracks-data.service';
import { ArtistsService } from 'src/app/services/artists.service';
import { ItunesService } from 'src/app/services/itunes.service';
import { HttpClient } from '@angular/common/http';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ARTISTSComponent implements OnInit {

  /*artists = [];
  albums = [];
  songs = [];*/
  

  constructor(public tracksData: TracksDataService, public artistsData: ArtistsService,
    public itunes:ItunesService, public player: PlayerService) { }

  ngOnInit() {
    //this.artists = this.artistsData.artists;
    /*if(this.artistsData.currAlbum.collectionId !==0){
      this.artistsData.filteredSongs = this.artistsData.songs.filter(song=>{
        return song.collectionId ==  this.artistsData.currAlbum.collectionId;
      });
    }
    else{
      this.artistsData.filteredSongs = this.artistsData.songs;
    }*/
    /*this.artistsData.songs.forEach(song=>{
      song.highlighted = false;
    });*/
    this.artistsData.artists.forEach(artist=>{
      artist.highlighted = false;
    })
    this.artistsData.filteredSongs = this.artistsData.songs;
    this.artistsData.filteredAlbums = this.artistsData.albums;
    this.artistsData.currAlbum.collectionId = 0;
    
    //this.albums = this.artistsData.albums;
    //this.artistsData.filteredSongs = this.songs;
    //this.artistsData.filteredAlbums = this.albums;
  }

  

  

  

}
