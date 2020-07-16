import { Component, OnInit, NgZone  } from '@angular/core';

interface BannerInfo{
  imgPath:string,
  content:string,
  author:string
}

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  owlCarouselOptions: Object; // 宣告 Owl Carousel 的 Options
  bannerInfos : Array<BannerInfo> = [];
  constructor(private _zone: NgZone) {
    this.owlCarouselOptions = { // 設定 Owl Carousel Options
      items: 1,
      dots: true,
      navigation: true,
      nav: false,
      autoplay: true,
      autoplayTimeout: 10000,
      autoplayHoverPause: false,
      loop: true,
      autoHeight:true,
      onTranslate: (e) => _zone.run(() => console.log("is translated, the page index is: "+e.page.index)),
    };
   }

  ngOnInit(): void {
  }

  InitBannerInfo(){
    this.bannerInfos.push({imgPath:'../../../assets/images/bg-1.png',content:'狗不是我們人一生的全部，但牠卻讓我們的人生完整了',author:'生態攝影師 羅傑、卡拉斯'});
  }
}
