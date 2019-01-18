import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-lazy2',
  templateUrl: './lazy2.component.html',
  styleUrls: ['./lazy2.component.scss']
})
export class Lazy2Component implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }
  testChild() {
    this.route.navigate(['route/lazy3'])
  }
}
