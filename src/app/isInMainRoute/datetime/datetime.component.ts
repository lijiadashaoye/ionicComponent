import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss']
})
export class DatetimeComponent implements OnInit {
  displayFormats = 'YYYY,M,D DDDD'

  minValue = '2015'
  maxValue = '2020'
  placeholderText = '选取时间'
  cancel = '取消'
  done = '确定'
  monthValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  dayValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 设置待选的日期

  customPickerOptions = {
    buttons: [{
      text: '保存1',
      handler: () => console.log('Clicked Save!')
    }, {
      text: '取消0',
      handler: () => {
        console.log('Clicked Log. Do not Dismiss.');
        return false;
      }
    }]
  }

  constructor() {}

  ngOnInit() {}
  ionChanges(e) { // 获取数据
    console.log(e.detail)
  }

}