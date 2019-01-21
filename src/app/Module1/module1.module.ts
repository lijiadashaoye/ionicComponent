import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Module1RoutingModule } from './module1.router'

import { TabsComponent } from '../Module1/tabs/tabs.component';
import { Lazy1Component } from '../Module1/lazy1/lazy1.component';
import { Lazy2Component } from '../Module1/lazy2/lazy2.component';
import { Lazy3Component } from '../Module1/lazy3/lazy3.component';
import { Lazy1Child1Component } from '../Module1/lazy1/lazy1-child1/lazy1-child1.component';
import { Lazy1Child2Component } from '../Module1/lazy1/lazy1-child2/lazy1-child2.component';

import { TabsService } from './state.service'
@NgModule({
  declarations: [
    TabsComponent,
    Lazy1Component,
    Lazy2Component,
    Lazy3Component,
    Lazy1Child1Component,
    Lazy1Child2Component
  ],
  imports: [
    CommonModule,
    IonicModule,
    Module1RoutingModule
  ],
  providers: [
    TabsService
  ]
})
export class Module1Module { }
