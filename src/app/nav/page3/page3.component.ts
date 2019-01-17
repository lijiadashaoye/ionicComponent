import { Component } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  constructor(
    public popover: PopoverController,
    public params: NavParams,
  ) {
    let kk = this.params.data
    console.log(kk)
  }

  dfasdf() {   // 关闭并返回数据
    this.popover.dismiss({
      name: 'page3 prover',
      age: 44
    })
  }

}
