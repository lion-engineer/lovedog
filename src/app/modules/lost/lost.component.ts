import { Component, OnInit, ViewChildren } from '@angular/core';
import { LostPet, LostService } from '../../service/lost.service';
import { HttpClient } from "@angular/common/http";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"


@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.scss']
})
export class LostComponent implements OnInit {
  owlCarouselOptions: Object; // 宣告 Owl Carousel 的 Options
  lostPromote: Array<LostPet>;
  isImageLoading: boolean = true;
  imageToShow: any;
  angleLeft = faAngleLeft;
  angleRight = faAngleRight;

  constructor(private httpClient: HttpClient,
    private lostService: LostService) {
    this.owlCarouselOptions = { // 設定 Owl Carousel Options
      items: 3,
      dots: true,
      navigation: false,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3500,
      autoplayHoverPause: false,
      loop: true,
      autoHeight: true,
      margin: 5,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    };
  }

  ngOnInit(): void {
    this.getTop30();
  }

  getTop30() {
    this.httpClient.get<LostPet[]>("assets/data/animalMissing.json").subscribe(data => {

      let hasImage = data.filter(x => x.PICTURE != '');
      let info: Array<LostPet> = [];
      for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * hasImage.length) + 1;
        info.push(hasImage[random]);
      }
      this.lostPromote = info;
    });
  }
  handleImageError(event) {
    event.target.src = 'assets/images/pet.png';
  }
}
