import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.scss']
})
export class NowplayingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("now playing");
  }

}
