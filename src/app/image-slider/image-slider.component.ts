import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  showTab = 1;
  tabToggle(index: number){
    this.showTab =index;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
