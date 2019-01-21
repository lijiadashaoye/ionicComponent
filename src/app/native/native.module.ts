import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeRoutingModule } from './native.router';
import { IonicModule } from '@ionic/angular';

import { NativeComponent } from './native.component';


@NgModule({
  declarations: [
    NativeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    NativeRoutingModule,
    
  ]
})
export class NativeModule { }
