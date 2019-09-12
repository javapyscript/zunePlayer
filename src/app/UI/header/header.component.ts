import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  

  private menuItems = [
    {name: "music", status: "active"},
    {name: "videos", status: "inactive"},
    {name: "pictures", status: "inactive"}
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
