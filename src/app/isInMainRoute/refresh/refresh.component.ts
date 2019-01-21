import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.scss']
})
export class RefreshComponent {
  datas = '还未更新';

  customAlertOptions: any = {
    header: 'Pizza Toppings',
    subHeader: 'Select your toppings',
    message: '$1.00 per topping',
    translucent: true
  };

  customPopoverOptions: any = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };

  customActionSheetOptions: any = {
    header: 'Colors',
    subHeader: 'Select your favorite color'
  };

  selectChanges(mul) {
    // multiple:["bacon", "olives", "xcheese"]

    console.log(mul.value)    
  }

  // 下拉刷新
  doRefresh(event) {
    setTimeout(() => {
      this.datas = '已经更新'
      event.target.complete();
    }, 2000);
  }

  ionCancels(e) {
    // console.log(e)
  }
  ionChanges(e) {
    // console.log(e)
  }
  ionBlurs(e) {
    // console.log(e)
  }

  segmentChanged(ev: any) {
    // console.log('Segment changed', ev);
  }

}