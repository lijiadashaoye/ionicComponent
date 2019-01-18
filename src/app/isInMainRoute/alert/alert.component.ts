import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  constructor(public alertController: AlertController) { }

  async base() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: '基础提示弹框',
      // buttons: ['OK']
    });
    await alert.present();
  }
  async presentAlertLongMessage() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit diam lorem, a faucibus turpis sagittis eu. In finibus augue in dui varius convallis. Donec vulputate nibh gravida odio vulputate commodo. Suspendisse imperdiet consequat egestas. Nulla feugiat consequat urna eu tincidunt. Cras nec blandit turpis, eu auctor nunc. Pellentesque finibus, magna eu vestibulum imperdiet, arcu ex lacinia massa, eget volutpat quam leo a orci. Etiam mauris est, elementum at feugiat at, dictum in sapien. Mauris efficitur eros sodales convallis egestas. Phasellus eu faucibus nisl. In eu diam vitae libero egestas lacinia. Integer sed convallis metus, nec commodo felis. Duis libero augue, ornare at tempus non, posuere vel augue. Cras mattis dui at tristique aliquam. Phasellus fermentum nibh ligula, porta hendrerit ligula elementum eu. Suspendisse sollicitudin enim at libero iaculis pulvinar. Donec ac massa id purus laoreet rutrum quis eu urna. Mauris luctus erat vel magna porttitor, vel varius erat rhoncus. Donec eu turpis vestibulum, feugiat urna id, gravida mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lobortis tortor. Nam ultrices volutpat elit, sed pharetra nulla suscipit at. Nunc eu accumsan eros, id auctor libero. Suspendisse potenti. Nam vitae dapibus metus. Maecenas nisi dui, sagittis et condimentum eu, bibendum vel eros. Vivamus malesuada, tortor in accumsan iaculis, urna velit consectetur ante, nec semper sem diam a diam. In et semper ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit, velit vel porttitor euismod, neque risus blandit nulla, non laoreet libero dolor et odio. Nulla enim risus, feugiat eu urna sed, ultrices semper felis. Sed blandit mi diam. Nunc quis mi ligula. Pellentesque a elit eu orci volutpat egestas. Aenean fermentum eleifend quam, ut tincidunt eros tristique et. Nam dapibus tincidunt ligula, id faucibus felis sodales quis. Donec tincidunt lectus ipsum, ac semper tellus cursus ac. Vestibulum nec dui a lectus accumsan vestibulum quis et velit. Aliquam finibus justo et odio euismod, viverra condimentum eros tristique. Sed eget luctus risus. Pellentesque lorem magna, dictum non congue sodales, laoreet eget quam. In sagittis vulputate dolor a ultricies. Donec viverra leo sed ex maximus, in finibus elit gravida. Aliquam posuere vulputate mi. Suspendisse potenti. Nunc consectetur congue arcu, at pharetra dui varius non. Etiam vestibulum congue felis, id ullamcorper neque convallis ultrices. Aenean congue, diam a iaculis mollis, nisl eros maximus arcu, nec hendrerit purus felis porta diam. Nullam vitae ultrices dui, ac dictum sapien. Phasellus eu magna luctus, varius urna id, molestie quam. Nulla in semper tellus. Curabitur lacinia tellus sit amet lacinia dapibus. Sed id condimentum tellus, nec aliquam sapien. Vivamus luctus at ante a tincidunt.',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel: blah');
        }
      }, 'OK']
    });
    return await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', {
        text: 'Other',
        handler: () => {
          console.log('执行其他');
        }
      }, 'Delete']
    });
    return await alert.present();
  }

  async  presentAlertNoMessage() {
    const alert = await this.alertController.create({
      header: 'Alert',
      buttons: ['OK']
    });
    return await alert.present();
  }
  async  presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok')
          }
        }
      ]
    });
    return await alert.present();
  }
  async  presentAlertPrompt() {

    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [

      // type?: TextFieldTypes | 'checkbox' | 'radio';
      // name?: string;
      // placeholder?: string;
      // value?: any;
      // label?: string;
      // checked?: boolean;
      // disabled?: boolean;
      // id?: string;
      // handler?: (input: AlertInput) => void;
      // min?: string | number;
      // max?: string | number;
        {
          label:'3423423',
          placeholder: 'Placeholder 13',
        },
        {
          name: 'name2',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2039-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data)
          }
        }
      ]
    });
    return await alert.present();
  }
  async  presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Radio',
      inputs: [
        {
          type: 'radio',
          label: 'Radio 1',
          name: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          type: 'radio',
          label: 'Radio 2',
          name: 'Radio 2',
          value: 'value2'
        },
        {
          type: 'radio',
          label: 'Radio 3',
          name: 'Radio 3',
          value: 4
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel')
          }
        }, {
          text: 'Ok',
          handler: (data) => {  // 返回上边的value
            console.log(data)
          }
        }
      ]
    });
    return await alert.present();
  }
  async  presentAlertCheckbox() {

    const alert = await this.alertController.create({
      header: 'Checkbox',
      inputs: [
        {
          type: 'checkbox',
          label: 'Checkbox 1',
          name: 'Checkbox 1',
          value: 'value1',
          checked: true
        },
        {
          type: 'checkbox',
          label: 'Checkbox 2',
          name: 'Checkbox 2',
          value: 'value2'
        },
        {
          type: 'checkbox',
          label: 'Checkbox 3',
          name: 'Checkbox 3',
          value: 'value3'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel')
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data)  // ["value1", "value2"]
            console.log('Confirm Ok')
          }
        }
      ]
    });
    return await alert.present();
  }
  async  presentWithCssClass() {

    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [{
        text: 'Ok',
        cssClass: 'selfCss2',
        handler: () => {
          console.log('Confirm Ok')
        }
      }]
    });
    return await alert.present();
  }
}