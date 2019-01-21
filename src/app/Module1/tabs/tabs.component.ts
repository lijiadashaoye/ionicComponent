import { Component, OnInit } from '@angular/core';
import { TabsService } from '../state.service'
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  isShow: boolean
  constructor(
    private tabs: TabsService
  ) { }

  ngOnInit() {
    this.isShow = true;
    this.tabs.sub.subscribe(val => {
      this.isShow = val;
    })
  }
  ionNavWillChanges(e) {
    // 导航即将转换为新组件时发出，每次切换都会触发
    // console.log(e)
  }
}
