import {
  Component,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-infite-scroll',
  templateUrl: './infite-scroll.component.html',
  styleUrls: ['./infite-scroll.component.scss']
})
export class InfiteScrollComponent {
  data = [1, 2, 3, 4, 5]
  data2 = [1, 2, 3, 4, 5]
  constructor() {}

  ngOnInit() {}
  loadData(event) {
    setTimeout(() => {
      this.data = this.data.concat(this.data2)
      event.target.complete();  // 必须加上
      if (this.data.length == 15) { // 禁用
        event.target.disabled = true;
      }
    }, 2000);
  }
}