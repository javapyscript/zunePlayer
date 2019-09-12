import { Component, OnInit, ViewChild, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { ItunesService } from 'src/app/services/itunes.service';
import { PlayerService } from 'src/app/services/player.service';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-footerplayer',
  templateUrl: './footerplayer.component.html',
  styleUrls: ['./footerplayer.component.scss']
})
export class FooterplayerComponent implements OnInit {
  currSong;
  curtime = 0;
  timePassed:string = "0:0";
  timeLeft = 0;
  currSongObj = {'trackName': "No Song selected"}

  //visualization vars
  context;
  src;
  
  

  @ViewChild('trackSeekbar')
  trackSeekBar:ElementRef;

  @ViewChild('canvas')
  canvas:ElementRef

  currAlbum = {collectionId : 0, artworkUrl60:"assets/icons/blankImage.png"};

  constructor(public renderer: Renderer2, public player:PlayerService, public artistsData: ArtistsService) { }

  ngOnInit() {

    this.artistsData.currSongChange.subscribe(song=>{
      this.currSongObj = song;
      console.log(song);
    });

    this.artistsData.currAlbumChange.subscribe(value=>{
      this.currAlbum = this.artistsData.currAlbum;
      console.log(this.currAlbum);
    });

    this.currSong = new Audio('assets/music/PrimaDonna Girl.mp3');
    this.currSong.crossOrigin = "anonymous";
    this.context = new AudioContext();
    this.src = this.context.createMediaElementSource(this.currSong);
    let simple = this.renderer.listen(this.trackSeekBar.nativeElement, 'change', (evt) => {
      this.currSong.currentTime = this.trackSeekBar.nativeElement.value;
      
      this.renderer.setAttribute(this.trackSeekBar.nativeElement, "max", this.currSong.duration);
    });

    this.currSong.addEventListener('timeupdate', ()=>{
      let minutes = Math.floor(parseInt(this.currSong.currentTime, 10) / 60);
      let seconds = parseInt(this.currSong.currentTime, 10) - minutes * 60;
      this.timePassed = minutes.toString() + ":" + seconds.toString();
      this.curtime = parseInt(this.currSong.currentTime, 10);
      this.renderer.setAttribute(this.trackSeekBar.nativeElement, "value", this.curtime.toString());
    });

    this.currSong.addEventListener('ended', ()=>{
      console.log("Finished");
      this.artistsData.playNextSong();
    });

    this.player.playTrack$.subscribe(previewUrl=>{
      this.startTrack(previewUrl);
    });
  }



  controlTrack(){
    console.log(this.currSong);
    if(this.currSong.paused){
      this.currSong.play();
    }
    else{
      this.currSong.pause();
    }
  }

  stopTrack(){
    this.currSong.pause();
  }

  startTrack(previewUrl){
    this.currSong.src = previewUrl;
    this.currSong.play();

    let analyser = this.context.createAnalyser();
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;
    let ctx = this.canvas.nativeElement.getContext("2d");
    this.src.connect(analyser);
    analyser.connect(this.context.destination);
    analyser.fftSize = 256;
    let bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);
    let dataArray = new Uint8Array(bufferLength);
    let WIDTH = this.canvas.nativeElement.width;
    let HEIGHT = this.canvas.nativeElement.height;
    let barWidth = (WIDTH / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        
        let r = barHeight + (25 * (i/bufferLength));
        let g = 250 * (i/bufferLength);
        let b = 50;
        let a = 0.1;

        ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    //audio.play();
    renderFrame();
  }

  seekTrack(event:boolean){
    
      this.currSong.currentTime = this.trackSeekBar.nativeElement.value;
      this.renderer.setAttribute(this.trackSeekBar.nativeElement, "max", this.currSong.duration);
      //this.trackSeekBar.nativeElement.attr("max", this.currSong.duration); 
   
    
  }


      
    
  

}
