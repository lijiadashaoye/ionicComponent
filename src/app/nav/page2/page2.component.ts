import { Component, OnInit } from '@angular/core';
import { NavParams, IonNav, NavController } from '@ionic/angular';
import { Page3Component } from '../page3/page3.component';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component {
  pageParams: any;
  page3 = Page3Component

  constructor(
    public params: NavParams,
    public navCtrl: IonNav,
    public NavCont: NavController
  ) {
    this.pageParams = {
      ...params.data
    };
    // console.log(this.pageParams)
  }
  goBack() {
    this.navCtrl.pop()
  }

  goBack1() {
    this.NavCont.goBack()
  }

  goBack2() {
    this.navCtrl.pop();
    // this.navCtrl.ionNavWillChange.subscribe(val => {
    //   console.log(val)
    // })
    // this.navCtrl.getPrevious().then(val => {
    //   console.log(val)
    // })
  }
}