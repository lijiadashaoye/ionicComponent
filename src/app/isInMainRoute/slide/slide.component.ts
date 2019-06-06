import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {
  kkk = null;
  slideOpts = {
    initialSlide: 0, // 最先显示的页面
    speed: 1000, // 轮播速度
    loop: true, // 循环  
    autoplay: { // 等待多久开始自动播放
      delay: 1000,
    },
  };

  ionSlideTouchEnd(e) {
    console.log(e)
    this.kkk = 'ionSlideTouchEnd';
    setTimeout(() => e.target.startAutoplay(), 3000)
  }
  ionSlideTap(e) {
    console.log(e)
    e.target.getActiveIndex().then(num => this.kkk = num)
  }
}