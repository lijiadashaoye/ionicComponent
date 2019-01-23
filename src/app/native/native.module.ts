import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeRoutingModule } from './native.router';
import { IonicModule } from '@ionic/angular';
import { NativeComponent } from './native.component';

import { Camera } from '@ionic-native/camera/ngx';
import { ActionSheet } from '@ionic-native/action-sheet/ngx';

@NgModule({
  declarations: [
    NativeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    NativeRoutingModule,
  ],
  providers: [
    Camera,
    ActionSheet,
    
  ]
})
export class NativeModule { }

