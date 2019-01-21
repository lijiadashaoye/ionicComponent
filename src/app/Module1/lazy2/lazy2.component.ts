import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ToastController } from '@ionic/angular';
import { TabsService } from '../state.service'

@Component({
  selector: 'app-lazy2',
  templateUrl: './lazy2.component.html',
  styleUrls: ['./lazy2.component.scss']
})
export class Lazy2Component implements OnInit {
  constructor(
    private route: Router,
    public toastController: ToastController,
    private tabs: TabsService
  ) { }

  ngOnInit() {
  }
  testChild() {
    this.tabs.toDo(false);
    
    this.route.navigate(['route/lazy3'])
  }

  async show() {
    const toast = await this.toastController.create({
      message: 'tips 的提示信息',
      showCloseButton: true,
      position: 'top',   // 弹框出现的位置
      closeButtonText: 'X',  // 要在关闭按钮中显示的文本
      color: 'success',
      duration: 2000,    // 显示的时间，默认一直显示
    });
    toast.present();
  }
}
