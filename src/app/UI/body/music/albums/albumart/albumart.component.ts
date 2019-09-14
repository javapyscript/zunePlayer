import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-albumart',
  templateUrl: './albumart.component.html',
  styleUrls: ['./albumart.component.scss'],
  animations: [
    trigger('albumAnimation', [
      transition(':enter', [
        animate('2000ms 0ms', style({ transform: 'translateX(80%)' }))
      ], { params: { delay: 0 } })
    ])
  ]
})
export class AlbumartComponent implements OnInit {

  constructor(public artistsData: ArtistsService) { }

  @Input('delay')
  delay:Number;

  @Input('album')
  album:any;

  ngOnInit() {
  }

}
