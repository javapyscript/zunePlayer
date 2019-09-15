import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TracksDataService } from 'src/app/services/tracks-data.service';
import { ArtistsService } from 'src/app/services/artists.service';
import { ItunesService } from 'src/app/services/itunes.service';
import { HttpClient } from '@angular/common/http';
import { PlayerService } from 'src/app/services/player.service';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ARTISTSComponent implements OnInit, AfterViewInit {

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

  ngAfterViewInit(){

    /*anime.add({
      targets: '.albumArtDiv',
      opacity: [0, 100],
      easing: 'linear',
      duration: 200,
      //offset: 20,
      delay: anime.stagger(100, {easing: 'linear'}) // increase delay by 100ms for each elements.
    });*/

    /*anime({
      targets: '.slide-right',
      translateX:300,
      duration: 1000,
      easing: 'easeOutQuart'
    })*/

    

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
