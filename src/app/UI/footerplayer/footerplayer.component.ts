import { Component, OnInit, ViewChild, ElementRef, Renderer2, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { ArtistsService } from 'src/app/services/artists.service';

import { Options } from 'ng5-slider';


@Component({
  selector: 'app-footerplayer',
  templateUrl: './footerplayer.component.html',
  styleUrls: ['./footerplayer.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class FooterplayerComponent implements OnInit {
  //currSong;

  @ViewChild('nowPlayingModal')
  nowPlayingModal:ElementRef
  display = 'none';

  curtime = 0;
  timePassed:string = "0:0";
  timeLeft = 0;
  currSongObj = {'trackName': "No Song selected"}
  //tempSong;
  volume = 50;

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
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

    this.artistsData.currSongChange.subscribe(song=>{
      this.currSongObj = song;
      console.log(song);
    });

    this.artistsData.currAlbumChange.subscribe(value=>{
      this.currAlbum = this.artistsData.currAlbum;
      console.log(this.currAlbum);
    });

    //this.currSong = new Audio('assets/music/PrimaDonna Girl.mp3');
    //this.tempSong = new Audio();
    this.player.currPlayingSong.volume = this.volume / 100;
    //this.tempSong.volume = this.volume / 100;
    //this.currSong.crossOrigin = "anonymous";
    this.player.currPlayingSong.crossOrigin = "anonymous"
    //this.tempSong.crossOrigin = "anonymous";
    this.context = new AudioContext();
    //this.src = this.context.createMediaElementSource(this.tempSong);
    this.src = this.context.createMediaElementSource(this.player.currPlayingSong);
    
    let simple = this.renderer.listen(this.trackSeekBar.nativeElement, 'change', (evt) => {
      this.player.currPlayingSong.currentTime = this.trackSeekBar.nativeElement.value;
      
      this.renderer.setAttribute(this.trackSeekBar.nativeElement, "max", this.player.currPlayingSong.duration.toString());
    });

    this.player.currPlayingSong.addEventListener('timeupdate', ()=>{
      let minutes = Math.floor(parseInt(this.player.currPlayingSong.currentTime.toString(), 10) / 60);
      let seconds = parseInt(this.player.currPlayingSong.currentTime.toString(), 10) - minutes * 60;
      this.timePassed = minutes.toString() + ":" + seconds.toString();
      this.curtime = parseInt(this.player.currPlayingSong.currentTime.toString(), 10);
      this.renderer.setAttribute(this.trackSeekBar.nativeElement, "value", this.curtime.toString());
    });

    this.player.currPlayingSong.addEventListener('ended', ()=>{
      console.log("Finished");
      this.artistsData.playNextSong();
    });

    this.player.playTrack$.subscribe(previewUrl=>{
      this.startTrack(previewUrl);
    });

    
  }

  changeVolume(event){
    console.log(event.target.value);
    this.volume = event.target.value;
    this.player.currPlayingSong.volume = this.volume / 100;
      
  
  }



  controlTrack(){
    console.log(this.player.currPlayingSong);

    if(this.player.currPlayingSong.paused){
      //this.currSong.play();
      this.player.currPlayingSong.play();
    }
    else{
      this.player.currPlayingSong.pause();
    }
  }

  stopTrack(){
    this.player.currPlayingSong.pause();
  }

  startTrack(previewUrl){
    this.player.currPlayingSong.src = previewUrl;
    this.player.currPlayingSong.volume = this.volume / 100;
    

    /*try {
      this.context =
        new (AudioContext)();
    } catch (error) {
      window.alert(
        `Sorry, but your browser doesn't support the Web Audio API!`
      );
    }*/

    
    this.context.resume();
    let analyser = this.context.createAnalyser();
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;
    let ctx = this.canvas.nativeElement.getContext("2d");
    this.src.connect(analyser);
    this.src.connect(this.context.destination);
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
        let a = 0.4;

        ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    //audio.play();
    renderFrame();
    this.player.currPlayingSong.play();
  }

  seekTrack(event:boolean){
    
      this.player.currPlayingSong.currentTime = this.trackSeekBar.nativeElement.value;
      this.renderer.setAttribute(this.trackSeekBar.nativeElement, "max", this.player.currPlayingSong.duration.toString());
      //this.trackSeekBar.nativeElement.attr("max", this.currSong.duration); 
   
    
  }


  showModal(){
    //this.nowPlayingModal.nativeElement.show();
    //this.display = 'block';
    this.display = 'block';
  }

  closeModal(){
    this.display = 'none';
  }


      
    
  

}
