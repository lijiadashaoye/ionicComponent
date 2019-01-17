import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ActionSheetComponent } from './action-sheet/action-sheet.component';
import { AlertComponent } from './alert/alert.component';
import { SomeComponentComponent } from './some-component/some-component.component';
import { CardComponent } from './card/card.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { WanggeComponent } from './wangge/wangge.component';
import { FabComponent } from './fab/fab.component';
import { InfiteScrollComponent } from './infite-scroll/infite-scroll.component';
import { InputsComponent } from './inputs/inputs.component';
import { ItemComponent } from './item/item.component';
import { SideSwipeComponent } from './side-swipe/side-swipe.component';
import { ModalComponent } from './modal/modal.component';
import { ModalChildComponent } from './modal/modal-child/modal-child.component';
import { NavComponent } from './nav/nav.component';
import { Page1Component } from './nav/page1/page1.component';
import { Page2Component } from './nav/page2/page2.component';
import { Page3Component } from './nav/page3/page3.component';

@NgModule({
  declarations: [
    AppComponent, 
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
export class AppModule {}
