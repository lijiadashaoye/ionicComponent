import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-lazy3',
  templateUrl: './lazy3.component.html',
  styleUrls: ['./lazy3.component.scss']
})
export class Lazy3Component implements OnInit {
  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }
  testChild() {
    this.route.navigate(['route/lazy1'])
  }
}
