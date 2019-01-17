import { Component } from '@angular/core';
import { NavParams, IonNav } from '@ionic/angular';
@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component {
  pageParams: any;
  constructor(
    public params: NavParams,
    public navCtrl: IonNav
  ) {
    this.pageParams = {
      ...params.data
    };
    // console.log(this.pageParams)
  }

  toPage1() {
    this.navCtrl.popToRoot()
  }
  toPage2() {
    this.navCtrl.pop()
  }

}
