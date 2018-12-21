import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionSheetComponent } from './action-sheet/action-sheet.component';
import { AlertComponent } from './alert/alert.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
