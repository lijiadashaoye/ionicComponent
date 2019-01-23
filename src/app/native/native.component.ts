import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-native',
  templateUrl: './native.component.html',
  styleUrls: ['./native.component.scss']
})
export class NativeComponent {
  imgSrc: any
  returnData = null
  constructor(
    private camera: Camera,
    private actionSheet: ActionSheet,
    private statusBar: StatusBar
  ) { }

  cameraFn() {
    const options: CameraOptions = {
      quality: 100,    // 图片质量,设置范围为0-100
      cameraDirection: 0,  // 选择要使用的相机（正面 1或背面 0）
      // 用来控制图片是以base64:0，还是本次临时存储url：1的方式返回
      destinationType: 0,
      encodingType: 0,  // 返回何种图片类型 JPEG:0 和 PNG：1
      // 设置要选择的媒体类型，默认 PICTURE：0，
      mediaType: 0,
    }
    let that = this;
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      that.imgSrc = base64Image
    }, (err) => {

    });
  }

  actionSheets() {
    let buttonLabels = ['Share via Facebook', 'Share via Twitter'];
    const options: ActionSheetOptions = {
      title: 'What do you want with this image?',
      subtitle: 'Choose an action',
      buttonLabels: buttonLabels,
      addCancelButtonWithLabel: 'Cancel',
      addDestructiveButtonWithLabel: 'Delete',
      destructiveButtonLast: true
    }
    this.actionSheet.show(options).then((buttonIndex: number) => {
      this.returnData = buttonIndex
    });
  }

  overlays1() {
    this.statusBar.overlaysWebView(true);
  }
  overlays2() {
    this.statusBar.overlaysWebView(false);
  }
  ByHexString() {
    this.statusBar.backgroundColorByHexString('#d40a0a');
  }
  ByName() {
    this.statusBar.backgroundColorByName('yellow');
  }
  hides(can) {
    if (can) {
      this.statusBar.show();
    } else {
      this.statusBar.hide();
    }
  }

}
