import { Component, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal-child',
  templateUrl: './modal-child.component.html',
  styleUrls: ['./modal-child.component.scss']
})
export class ModalChildComponent {
  @Input() value: number;
  @Input() datas: string;

  constructor(
    public navParams: NavParams,
    public modalController: ModalController
  ) {

  }
  ngOnInit(): void {
    // console.log(this.navParams)
    // console.log(this.value)
    // console.log(this.datas)
  }
  toClose() {
    this.modalController.dismiss({
      'modal_return_data': 'datas'
    })
  }
}