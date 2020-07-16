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
    this.InitBannerInfo();
  }

  InitBannerInfo(){
    this.bannerInfos.push({imgPath:'../../../assets/images/bg-1.png',content:'狗不是我們人一生的全部，但牠卻讓我們的人生完整了。',author:'生態攝影師 羅傑、卡拉斯'});
    this.bannerInfos.push({imgPath:'../../../assets/images/bg-2.png',content:'錢可以買到一條很優秀的狗，卻買不到它搖尾的熱情。',author:'亨利·惠勒·蕭'});
    this.bannerInfos.push({imgPath:'../../../assets/images/bg-3.png',content:'如果我們了解狗真正的本性，並且知道如何鼓勵它們，我們就能成為更好的主人。',author:'依莉莎白湯瑪斯'});
    this.bannerInfos.push({imgPath:'../../../assets/images/bg-4.png',content:'對一隻狗好，也許只花你一部分的時間，而它，卻將一輩子回報於你。如果你願意，它知道怎樣感動你的心',author:'嘉貝麗．文生'});
    this.bannerInfos.push({imgPath:'../../../assets/images/bg-5.png',content:'寵物只是你生活的一部分,但你卻是寵物的全世界。',author:''});
  }
}
