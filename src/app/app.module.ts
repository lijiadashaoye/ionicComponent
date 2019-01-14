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
  ],
  entryComponents: [],
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
