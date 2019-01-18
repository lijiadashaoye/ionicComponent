import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wangge',
  templateUrl: './wangge.component.html',
  styleUrls: ['./wangge.component.scss']
})
export class WanggeComponent implements OnInit {
  items = [
    {
      src: '../assets/earth.png',
      text: 'imgs'
    },
    {
      src: '../assets/earth.png',
      text: 'imgs'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
