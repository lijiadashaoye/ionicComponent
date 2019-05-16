import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ActionSheetComponent } from './isInMainRoute/action-sheet/action-sheet.component';
import { AlertComponent } from './isInMainRoute/alert/alert.component';
import { SomeComponentComponent } from './isInMainRoute/some-component/some-component.component';
import { CardComponent } from './isInMainRoute/card/card.component';
import { CheckBoxComponent } from './isInMainRoute/check-box/check-box.component';
import { DatetimeComponent } from './isInMainRoute/datetime/datetime.component';
import { WanggeComponent } from './isInMainRoute/wangge/wangge.component';
import { FabComponent } from './isInMainRoute/fab/fab.component';
import { InfiteScrollComponent } from './isInMainRoute/infite-scroll/infite-scroll.component';
import { InputsComponent } from './isInMainRoute/inputs/inputs.component';
import { ItemComponent } from './isInMainRoute/item/item.component';
import { SideSwipeComponent } from './isInMainRoute/side-swipe/side-swipe.component';
import { ModalComponent } from './isInMainRoute/modal/modal.component';
import { ModalChildComponent } from './isInMainRoute/modal/modal-child/modal-child.component';
import { NavComponent } from './isInMainRoute/nav_propver/nav.component';
import { Page1Component } from './isInMainRoute/nav_propver/page1/page1.component';
import { Page2Component } from './isInMainRoute/nav_propver/page2/page2.component';
import { Page3Component } from './isInMainRoute/nav_propver/page3/page3.component';
import { RefreshComponent } from './isInMainRoute/refresh/refresh.component';
import { SlideComponent } from './isInMainRoute/slide/slide.component';

const obj1 = [
  AlertComponent,
  ActionSheetComponent,
  SomeComponentComponent,
  CardComponent,
  CheckBoxComponent,
  DatetimeComponent,
  WanggeComponent,
  FabComponent,
  InfiteScrollComponent,
  InputsComponent,
  ItemComponent,
  SideSwipeComponent,
  ModalComponent,
  ModalChildComponent,
  NavComponent,
  Page1Component,
  Page2Component,
  Page3Component,
  RefreshComponent,
]

@NgModule({
  declarations: [
    AppComponent,
    ...obj1,
    SlideComponent,
  ],
  entryComponents: [
    ModalChildComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
