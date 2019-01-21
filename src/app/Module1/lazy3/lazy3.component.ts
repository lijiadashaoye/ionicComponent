import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { TabsService } from '../state.service'

@Component({
  selector: 'app-lazy3',
  templateUrl: './lazy3.component.html',
  styleUrls: ['./lazy3.component.scss']
})
export class Lazy3Component implements OnInit {
  constructor(
    private route: Router,
    private tabs: TabsService
  ) { }

  ngOnInit() {
  }
  testChild() {
    this.tabs.toDo(true);
    // this.route.navigate(['route/lazy2'])
  }

}
