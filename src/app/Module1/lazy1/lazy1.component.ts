import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-lazy1',
  templateUrl: './lazy1.component.html',
  styleUrls: ['./lazy1.component.scss']
})
export class Lazy1Component implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }
  testRoute() {
    this.route.navigate(['route/lazy2'])
  }
  testRoute1() {
    this.route.navigate(['route/lazy1/lazy1_child1'])
  }
  testRoute2() {
    this.route.navigate(['route/lazy1/lazy1_child2'])
  }
  testRoute3() {
    this.route.navigate(['inputs'])
  }
}
