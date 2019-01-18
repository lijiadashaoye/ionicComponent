import { Component } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Page2Component } from '../page2/page2.component';
import { Page3Component } from '../page3/page3.component';

import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {
  pageParams2: any;
  page2 = Page2Component;
  returnData: any;
  changeVal: any = null;
  setTime: any

  constructor(
    public params: NavParams,
    public popover: PopoverController
  ) {
    this.pageParams2 = {
      ...params.data
    };
    // console.log(this.pageParams)

    this.setTime = setInterval(() => {
      this.changeVal++;
      if (this.changeVal > 88) {
        clearInterval(this.setTime)
      }
    }, 300)
  }

  async presentPopover(ev: any) {
    const popover = await this.popover.create({
      component: Page3Component,
      event: ev,     // 用来让弹框定位到点击位置
      translucent: false,  // 设置显示内容的部分是否半透明
      componentProps: {
        name: 'name',
        age: '00000'
      }
    });
    await popover.present();

    let willDismiss = await popover.onWillDismiss();
    this.returnData = willDismiss.data;
    // console.log(this.returnData)
  }

  ionChanges(jj) {
    console.log(jj)
  }
  rangeChanges() {
    console.log(9)
  }
}
