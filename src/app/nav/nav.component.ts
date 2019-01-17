import { Component } from '@angular/core';

import { Page1Component } from './page1/page1.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  rootPage=Page1Component;
  pageParams={
    name:'name',
    age:33
  }

  constructor() {}
}
