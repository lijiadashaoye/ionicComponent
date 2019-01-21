import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  arr1 = [
    {
      title: 'ActionSheet',
      url: '/actionSheet',
      icon: 'star'
    },
    {
      title: 'Alert',
      url: '/alert',
      icon: 'star'
    },
    {
      title: 'someComponent',
      url: '/some-component',
      icon: 'star'
    },
    {
      title: 'card',
      url: '/card',
      icon: 'star'
    },
    {
      title: 'checkBox',
      url: '/check-box',
      icon: 'star'
    }, {
      title: 'datetime',
      url: '/datetime',
      icon: 'star'
    }, {
      title: 'wangge',
      url: '/wangge',
      icon: 'star'
    }, {
      title: 'fab',
      url: '/fab',
      icon: 'airplane'
    }
    , {
      title: 'infite-scroll',
      url: '/infite-scroll',
      icon: 'airplane'
    }
    , {
      title: 'inputs',
      url: '/inputs',
      icon: 'airplane'
    }, {
      title: 'items',
      url: '/items',
      icon: 'sunny'
    }, {
      title: 'side-swipe',
      url: '/side-swipe',
      icon: 'sunny'
    }, {
      title: 'modal',
      url: '/modal',
      icon: 'sunny'
    }, {
      title: 'nav_popover_range',
      url: '/nav_popover',
      icon: 'sunny'
    }
  ]
  
  arr2=[
    {
      title: 'refresher_forms',
      url: '/refresher',
      icon: 'sunny'
    },
    {
      title: 'route',
      url: '/route',
      icon: 'sunny'
    }

    
  ]
  public appPages = [
    ...this.arr2.reverse(),
    ...this.arr1,
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openFirst() {
    this.menu.open('start');
  }

}