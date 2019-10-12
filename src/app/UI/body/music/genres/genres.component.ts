import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GENRESComponent implements OnInit {

  artistsByGenre = [];
  artistsList = [];

  constructor(public artistsData:ArtistsService) { }

  ngOnInit() {
    this.artistsData.filteredSongs = this.artistsData.songs;
    this.artistsData.filteredAlbums = this.artistsData.albums;
    this.artistsData.currAlbum.collectionId = 0;
    this.artistsData.genres.forEach(genre=>{
      genre.highlighted = false;
    });
    this.artistsData.currentGenreChange.subscribe(value=>{
      this.setAlbumsByArtist();
    });

    this.setAlbumsByArtist();
  }

  setAlbumsByArtist(){
    this.artistsByGenre = [];
    this.artistsList = [];
    this.artistsData.filteredAlbums.forEach(album=>{
      if(!this.artistsList.includes(album.artistId)){
        this.artistsList.push(album.artistId);
        this.artistsByGenre.push({artistId: album.artistId, artistName: album.artistName, albums:[album]});
      }
      else{
        this.artistsByGenre.forEach(artist=>{
          if(artist.artistId===album.artistId){
            artist.albums.push(album);
          }
        });
      }
    });
  }

}
