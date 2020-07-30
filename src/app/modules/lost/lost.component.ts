import { Component, OnInit } from '@angular/core';
import { LostPet, LostService } from '../../service/lost.service';
import { HttpClient } from "@angular/common/http";
import{faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.scss']
})
export class LostComponent implements OnInit {
  owlCarouselOptions: Object; // 宣告 Owl Carousel 的 Options
  lostPromote:Array<LostPet>;
  isImageLoading:boolean = true;
  imageToShow: any;
  angleLeft = faAngleLeft;
  angleRight = faAngleRight;
  constructor(private httpClient: HttpClient, 
    private lostService:LostService) {
      this.owlCarouselOptions = { // 設定 Owl Carousel Options
        items: 3,
        dots: true,
        navigation: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        loop: true,
        autoHeight:true,
        margin:5,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
      };
     }

  ngOnInit(): void {
    this.getTop30();
    //this.getImageFromService();
  }

  getTop30() {
    this.httpClient.get<LostPet[]>("../../../assets/data/animalMissing.json").subscribe(data => {

      let hasImage = data.filter(x => x.PICTURE != '');
      let info: Array<LostPet> = [];
      for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hasImage.length) + 1;
        info.push(hasImage[random]);
      }
      this.lostPromote = info;
      console.log(this.lostPromote);
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

  getImageFromService() {
    this.isImageLoading = true;
    this.lostService.getImage('https://www.pet.gov.tw/XMLRequest/PET_PIC.ashx?File_No=L1231402020042501').subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

  handleImageError(isError:boolean){
    this.isImageLoading = false;
  }
}
