import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TracksDataService } from 'src/app/services/tracks-data.service';
import { ItunesService } from 'src/app/services/itunes.service';
import { PlayerService } from 'src/app/services/player.service';
import { ArtistsService } from 'src/app/services/artists.service';
import anime from 'animejs/lib/anime.es.js';



@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  
})
export class ALBUMSComponent implements OnInit,AfterViewInit {

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

  ngAfterViewInit(){
    let animTimeline = anime.timeline();

    animTimeline.add({
      targets: '.albumArtDiv',
      opacity: 0,
      duration:0,
      easing: 'linear'
      
    });

    animTimeline.add({
      targets: '.albumArtDiv',
      opacity: 1,
      easing: 'linear',
      duration: 80,
      //offset: 1000,
      delay: anime.stagger(80, {easing: 'linear'}) // increase delay by 100ms for each elements.
    },'+=700');
  }
  


}
