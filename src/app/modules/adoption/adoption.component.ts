import { Component, OnInit } from '@angular/core';
import { Adoption} from '../../service/adopt.service'
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.scss']
})
export class AdoptionComponent implements OnInit {
  adoption : Adoption;
  adoptionPromote:Array<Adoption>;
  constructor(private httpClient: HttpClient) { 
    
  }

  ngOnInit(): void {
    this.GetTop30();
  }
  GetTop30(){
    this.httpClient.get<Adoption[]>("../../../assets/data/animalAdopt.json").subscribe(data =>{
      
      let hasImage = data.filter(x => x.album_file != '');
      let info:Array<Adoption> = [];
      for(let i = 0; i < 6; i++){
        let random =  Math.floor(Math.random() * hasImage.length) + 1;
        info.push(hasImage[random]);
      }
      this.adoptionPromote = info;
      console.log(this.adoptionPromote);
    });
  }
}

