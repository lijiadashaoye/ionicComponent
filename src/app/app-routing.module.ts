import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { NavComponent } from './isInMainRoute/nav_propver/nav.component';
import { RefreshComponent } from './isInMainRoute/refresh/refresh.component';


let arr1 = [
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
  }, {
    path: 'card',
    component: CardComponent
  }, {
    path: 'check-box',
    component: CheckBoxComponent
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
  {
    path: 'side-swipe',
    component: SideSwipeComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  }, {
    path: 'nav_popover',
    component: NavComponent
  },
]
const routes: Routes = [
  ...arr1,
  {
    path: 'refresher',
    component: RefreshComponent
  },
  {
    path: 'route',
    loadChildren: './Module1/module1.module#Module1Module'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
