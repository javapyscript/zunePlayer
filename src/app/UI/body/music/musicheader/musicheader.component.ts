import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musicheader',
  templateUrl: './musicheader.component.html',
  styleUrls: ['./musicheader.component.scss']
})
export class MusicheaderComponent implements OnInit {

  private menuItems = [
    {name: "ARTISTS", status: "active"},
    {name: "GENRES", status: "inactive"},
    {name: "ALBUMS", status: "inactive"},
    {name: "SONGS", status: "inactive"},
    {name: "PLAYLISTS", status: "inactive"}
  ];

  constructor() { }

  ngOnInit() {
  }

  setCurrentMenu(index:number) {
    /*let sibling = event.target.parentNode.firstChild;
    while(sibling) {
      if (sibling.nodeType === 1) {
        sibling.style.color = "rgba(0, 0, 0, 0.1)";
        
      }
      sibling = sibling.nextSibling;
    }
    event.target.style.color = "rgba(0, 0, 0, 0.9)";*/
    console.log(index);
    this.menuItems.forEach(menuItem=>{
      menuItem.status = "inactive";
    });

    this.menuItems[index].status = "active";
    console.log(this.menuItems);
  }

}
