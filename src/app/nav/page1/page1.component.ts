import { Component } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Page2Component } from '../page2/page2.component';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {
  pageParams: any;
  page2 = Page2Component

  constructor(
    public params: NavParams
  ) {
    this.pageParams = {
      ...params.data
    };
    // console.log(this.pageParams)
  }
}
