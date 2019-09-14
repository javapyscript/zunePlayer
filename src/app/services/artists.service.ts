import { Injectable } from '@angular/core';
import { ItunesService } from './itunes.service';
import { Subject } from 'rxjs';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  albums = [];
  filteredAlbums = [];
  songs = [];
  filteredSongs = [];
  ;
  currAlbum = {collectionId : 0, artworkUrl60:"assets/icons/blankImage.png"};
  currAlbumChange = new Subject<null>();
  songPlaying = {};
  currSongChange = new Subject<any>();

  artists = [
    {"highlighted":false,"wrapperType":"artist", "artistType":"Artist", "artistName":"Enrique Iglesias", "artistLinkUrl":"https://music.apple.com/us/artist/enrique-iglesias/90895?uo=4", "artistId":90895, "amgArtistId":169286, "primaryGenreName":"Pop", "primaryGenreId":14},

    {"highlighted":false,"wrapperType":"artist", "artistType":"Artist", "artistName":"Rihanna", "artistLinkUrl":"https://music.apple.com/us/artist/rihanna/63346553?uo=4", "artistId":63346553, "amgArtistId":704560, "primaryGenreName":"Pop", "primaryGenreId":14},

    {"highlighted":false,"wrapperType":"artist", "artistType":"Artist", "artistName":"Kelly Clarkson", "artistLinkUrl":"https://music.apple.com/us/artist/kelly-clarkson/316265?uo=4", "artistId":316265, "amgArtistId":542180, "primaryGenreName":"Pop", "primaryGenreId":14},

    {"highlighted":false,"wrapperType":"artist", "artistType":"Artist", "artistName":"Beyoncé", "artistLinkUrl":"https://music.apple.com/us/artist/beyonc%C3%A9/1419227?uo=4", "artistId":1419227, "primaryGenreName":"Pop", "primaryGenreId":14},

    /*{"wrapperType":"artist", "artistType":"Artist", "artistName":"Nickelback", "artistLinkUrl":"https://music.apple.com/us/artist/nickelback/5280361?uo=4", "artistId":5280361, "amgArtistId":410589, "primaryGenreName":"Rock", "primaryGenreId":21},

    {"wrapperType":"artist", "artistType":"Artist", "artistName":"Shakira", "artistLinkUrl":"https://music.apple.com/us/artist/shakira/889327?uo=4", "artistId":889327, "amgArtistId":174707, "primaryGenreName":"Pop", "primaryGenreId":14},

    {"wrapperType":"artist", "artistType":"Artist", "artistName":"Christina Aguilera", "artistLinkUrl":"https://music.apple.com/us/artist/christina-aguilera/259398?uo=4", "artistId":259398, "amgArtistId":357293, "primaryGenreName":"Pop", "primaryGenreId":14},

    {"wrapperType":"artist", "artistType":"Artist", "artistName":"Taylor Swift", "artistLinkUrl":"https://music.apple.com/us/artist/taylor-swift/159260351?uo=4", "artistId":159260351, "amgArtistId":816977, "primaryGenreName":"Pop", "primaryGenreId":14},

    {"wrapperType":"artist", "artistType":"Artist", "artistName":"Lana Del Rey", "artistLinkUrl":"https://music.apple.com/us/artist/lana-del-rey/464296584?uo=4", "artistId":464296584, "amgArtistId":2487752, "primaryGenreName":"Alternative", "primaryGenreId":20},

    {"wrapperType":"artist", "artistType":"Artist", "artistName":"Ed Sheeran", "artistLinkUrl":"https://music.apple.com/us/artist/ed-sheeran/183313439?uo=4", "artistId":183313439, "amgArtistId":2342870, "primaryGenreName":"Pop", "primaryGenreId":14},

    {"wrapperType":"artist", "artistType":"Artist", "artistName":"Drake", "artistLinkUrl":"https://music.apple.com/us/artist/drake/271256?uo=4", "artistId":271256, "amgArtistId":905792, "primaryGenreName":"Hip-Hop/Rap", "primaryGenreId":18}*/
  ];

  constructor(public itunes:ItunesService, public player:PlayerService) {
    
    this.artists.forEach(artist=>{
      this.itunes.getAlbum(artist.artistId).subscribe(albums=>{
        console.log(albums);
        this.albums.push(...albums);
        this.filteredAlbums.push(...albums);
        albums.forEach(album=>{
          this.itunes.getTracks(album.collectionId).subscribe(tracks=>{
            tracks = tracks.filter((track)=>{
              if(track.wrapperType=='track'){
                track["highlighted"] = false;
                return track;
              }
              
            });
            this.songs.push(...tracks);
            //this.filteredSongs.push(...tracks);
          });
        });
      });
      //this.albums.push(this.itunes.getAlbum(artist.artistId));
    });
    
    
  }

  getSongIndex(){
    let songIndex; 
    this.filteredSongs.forEach((song, index)=>{
      if(song.highlighted === true){
        songIndex = index;
      }
    });
    this.filteredSongs.forEach(song=>{
      song.highlighted = false;
    });
    return songIndex;
  }

  playPrevSong(){
    let songIndex = this.getSongIndex();
    if(songIndex!== 0){
      let prevSong = this.filteredSongs[songIndex - 1];
      prevSong.highlighted = true;
      this.player.playTrack(prevSong.previewUrl);
      this.currSongChange.next(prevSong);
    }

  }

  playNextSong(){
    let songIndex = this.getSongIndex();
    if(songIndex!== this.filteredSongs.length - 1){
      let nextSong = this.filteredSongs[songIndex+1];
      nextSong.highlighted = true;
      this.player.playTrack(nextSong.previewUrl);
      this.currSongChange.next(nextSong);
    }
    
  }

  playTrack(song){
    this.filteredSongs.forEach(currsong=>{
      currsong.highlighted = false;
    });
    song.highlighted = true;
    this.player.playTrack(song.previewUrl);
    this.currAlbum.collectionId = song.collectionId;
    this.currAlbum.artworkUrl60 = song.artworkUrl60;
    this.currAlbumChange.next();
    this.songPlaying = song;
    this.currSongChange.next(song);
    //this.artistsData.filteredSongs = this.songs;
  }

  filterTracks(album){
    this.filteredSongs = this.songs.filter(song=>{
      return song.collectionId ==  album.collectionId;
    });
    this.currAlbum.collectionId = album.collectionId;
    //this.artistsData.filteredSongs = this.songs;
  }

  selectAlbumsByArtist(artist){
    this.artists.forEach(currArtist=>{
      currArtist.highlighted = false;
    });
    artist.highlighted = true;
    let newAlbumNames = [];
    this.filteredAlbums = this.albums.filter(album=>{
      return album.artistId === artist.artistId;
    });
    console.log(this.filteredAlbums);
    this.filteredSongs = [];
    this.filteredAlbums.forEach(filteredAlbum=>{
      newAlbumNames.push(filteredAlbum.collectionId);
    });
    let newSongs = [];
    this.songs.forEach(filteredSong=>{
      if(newAlbumNames.includes(filteredSong.collectionId)){
        newSongs.push(filteredSong);
      }
    });
    this.filteredSongs = newSongs;
    //this.artistsData.filteredAlbums = this.albums;
  }

  


}
