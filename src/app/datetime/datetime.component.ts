import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss']
})
export class DatetimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ionChanges(e) {    // 获取数据
    // console.log(e)
  }
}
