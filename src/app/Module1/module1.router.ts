import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsComponent } from '../Module1/tabs/tabs.component';
import { Lazy1Component } from '../Module1/lazy1/lazy1.component';
import { Lazy2Component } from '../Module1/lazy2/lazy2.component';
import { Lazy3Component } from '../Module1/lazy3/lazy3.component';
import { Lazy1Child1Component } from '../Module1/lazy1/lazy1-child1/lazy1-child1.component';
import { Lazy1Child2Component } from '../Module1/lazy1/lazy1-child2/lazy1-child2.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'lazy1'
    },
    {
        path: '',
        component: TabsComponent,
        children: [
            {
                path: 'lazy1',
                component: Lazy1Component,
                children: [
                    {
                        path: 'lazy1/lazy1_child1',
                        component: Lazy1Child1Component
                    },
                    {
                        path: 'lazy1/lazy1_child2',
                        component: Lazy1Child2Component
                    },
                ]
            },
            {
                path: 'lazy2',
                component: Lazy2Component
            },
            {
                path: 'lazy3',
                component: Lazy3Component
            }
        ]
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Module1RoutingModule { }
