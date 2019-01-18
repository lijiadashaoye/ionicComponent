import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalChildComponent } from './modal-child/modal-child.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(public modalController: ModalController) { }

  ngOnInit(): void {
 }
  async presentModal() {
    const modal = await this.modalController.create({
      backdropDismiss: true,
      showBackdrop: true,
      component: ModalChildComponent,  // 要在模态内显示的组件
      componentProps: {  // 要传递给模态组件的数据
        value: 123,
        datas: 'datas'
      }
    });
    await modal.present();

    // let  didDismiss= await modal.onDidDismiss();
    // console.log(didDismiss)

    let willDismiss = await modal.onWillDismiss();
    console.log(willDismiss.data)
  }
}
