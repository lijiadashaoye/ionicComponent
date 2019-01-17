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
  pageParams: any;
  page2 = Page2Component

  constructor(
    public params: NavParams,
    public popover: PopoverController
  ) {
    this.pageParams = {
      ...params.data
    };
    // console.log(this.pageParams)
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
    console.log(willDismiss)
  }

}
