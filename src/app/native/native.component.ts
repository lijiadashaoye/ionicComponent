import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';


@Component({
  selector: 'app-native',
  templateUrl: './native.component.html',
  styleUrls: ['./native.component.scss']
})
export class NativeComponent {
  imgSrc: any
  returnData=null
  constructor(
    private camera: Camera,
    private actionSheet: ActionSheet,
    private faio: FingerprintAIO
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
      this.returnData=buttonIndex
    });
  }

  faios(){
    this.faio.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', //Only necessary for Android
      disableBackup:true,  //Only for Android(optional)
      localizedFallbackTitle: 'Use Pin', //Only for iOS
      localizedReason: 'Please authenticate' //Only for iOS
  })
  .then((result: any) => {
    this.returnData=result
  })
  .catch((error: any) => this.returnData=error);
  }
}
