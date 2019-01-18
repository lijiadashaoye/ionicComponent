import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.scss']
})
export class RefreshComponent {
  datas = '还未更新'
  doRefresh(event) {
    setTimeout(() => {
      this.datas = '已经更新'
      event.target.complete();
    }, 2000);
  }
}