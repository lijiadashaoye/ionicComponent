import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'actionSheet',
    pathMatch: 'full'
  },
  {
    path: 'actionSheet',
    component: ActionSheetComponent
  },
  {
    path: 'alert',
    component: AlertComponent
  },
  {
    path: 'some-component',
    component: SomeComponentComponent
  },{
    path:'card',
    component:CardComponent
  },{
    path:'check-box',
    component:CheckBoxComponent
  },
  {
    path: 'datetime',
    component: DatetimeComponent
  },
  {
    path: 'wangge',
    component: WanggeComponent
  },
  {
    path: 'fab',
    component: FabComponent
  },
  {
    path: 'infite-scroll',
    component: InfiteScrollComponent
  },
  {
    path: 'inputs',
    component: InputsComponent
  },
  {
    path: 'items',
    component: ItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
