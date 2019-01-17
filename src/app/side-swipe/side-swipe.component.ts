import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-side-swipe',
  templateUrl: './side-swipe.component.html',
  styleUrls: ['./side-swipe.component.scss']
})
export class SideSwipeComponent {
  constructor(
    public loadingController: LoadingController,
    ) { }

  async show() {
    const loading = await this.loadingController.create({
      animated: true,
      spinner: 'circles',  // modal 转圈的样式
      // duration: 1400,   // 显示 modal 的时间长短
      message: 'Please wait...',  // modal 的文字
      translucent: true,
      cssClass: 'custom-loading',
      showBackdrop: true,
      keyboardClose: true,
    });
    await loading.present();
    setTimeout(() => {  // 通过事件关闭弹框
      loading.dismiss()
    }, 5000)
  }
}
