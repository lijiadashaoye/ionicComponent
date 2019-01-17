import { Component } from '@angular/core';
import { IonNav, NavController } from '@ionic/angular';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component {

  constructor(
    public navCtrl: IonNav,
    public NavCont: NavController,
  ) {}
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