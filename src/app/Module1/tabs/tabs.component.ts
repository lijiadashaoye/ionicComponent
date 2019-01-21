import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  ionNavWillChanges(e) {
    // 导航即将转换为新组件时发出，每次切换都会触发
    // console.log(e)
  }
}
