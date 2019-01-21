import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NativeComponent } from './native.component';

const routes: Routes = [
    { path: '', component: NativeComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NativeRoutingModule { }
