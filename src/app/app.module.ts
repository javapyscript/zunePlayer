import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './UI/header/header.component';
import { BodyComponent } from './UI/body/body.component';
import { MusicComponent } from './UI/body/music/music.component';
import { VideoComponent } from './UI/body/video/video.component';
import { PicturesComponent } from './UI/body/pictures/pictures.component';
import { MusicheaderComponent } from './UI/body/music/musicheader/musicheader.component';
import { ARTISTSComponent } from './UI/body/music/artists/artists.component';
import { GENRESComponent } from './UI/body/music/genres/genres.component';
import { ALBUMSComponent } from './UI/body/music/albums/albums.component';
import { SONGSComponent } from './UI/body/music/songs/songs.component';
import { PLAYLISTSComponent } from './UI/body/music/playlists/playlists.component';
import { TracksDataService } from './services/tracks-data.service';
import { FooterplayerComponent } from './UI/footerplayer/footerplayer.component';
import { ItunesService } from './services/itunes.service';
import { ArtistsService } from './services/artists.service';
import { PlayerService } from './services/player.service';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
import { AlbumartComponent } from './UI/body/music/albums/albumart/albumart.component';
import { Ng5SliderModule } from 'ng5-slider';
import { NowplayingComponent } from './UI/body/music/nowplaying/nowplaying.component';

const appRoutes: Routes = [
  { 
    path: 'music', 
    component: MusicComponent,
    children:[
      {path: 'ARTISTS', component: ARTISTSComponent},
      {path: 'GENRES', component: GENRESComponent},
      {path: 'ALBUMS', component: ALBUMSComponent},
      {path: 'SONGS', component: SONGSComponent},
      {path: 'PLAYLISTS', component: PLAYLISTSComponent},
      {path: '', redirectTo: '/music/ARTISTS', pathMatch:"full"},
      
    ]
  },
  { path: 'videos', component: VideoComponent },
  { path: 'pictures', component: PicturesComponent },
  
  { path: '',
    redirectTo: '/music/ARTISTS',
    pathMatch: 'prefix'
  },
  {path:'nowPlaying', component: NowplayingComponent}
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    MusicComponent,
    VideoComponent,
    PicturesComponent,
    MusicheaderComponent,
    ARTISTSComponent,
    GENRESComponent,
    SONGSComponent,
    ALBUMSComponent,
    PLAYLISTSComponent,
    FooterplayerComponent,
    AlbumartComponent,
    NowplayingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    Ng5SliderModule,
    RouterModule.forRoot(
      appRoutes, {useHash: true}
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [TracksDataService, ItunesService, ArtistsService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
