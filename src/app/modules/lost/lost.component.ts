import { Component, OnInit } from '@angular/core';
import { LostPet } from '../../service/lost.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.scss']
})
export class LostComponent implements OnInit {

  lostPromote:Array<LostPet>;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getTop30();
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

}
