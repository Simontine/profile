import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// ViewportScroller

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  

  ngOnInit(): void {
  }
  goToSection(section: string) {
    this.scroller.scrollToAnchor(section)
   }
}
