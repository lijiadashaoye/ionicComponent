import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styleUrls: ['./some-component.component.scss']
})
export class SomeComponentComponent implements OnInit {
  backButtonText = '8989'
  backButtonIcon = 'add'
  backButtonColor = 'warning'

  constructor() { }

  ngOnInit() {
  }
  DefaultClick() {
    console.log(9)
  }
  maodian(tag: HTMLElement) {
    tag.scrollIntoView();
  }
  ionscroll(e) {   // 监听滚动事件数据
    // console.log(e.detail)  
  }
  toBottom(tar) {
    // console.log(tar)
    tar.scrollToBottom()
  }
  toTop(tar) {
    // console.log(tar)
    tar.scrollToTop()
  }
}
