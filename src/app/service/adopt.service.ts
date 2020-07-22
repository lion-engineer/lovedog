import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AdoptService {
  adoption:Adoption;
  
  constructor(private httpClient: HttpClient) { }

  GetAll() : any{
    this.httpClient.get<Adoption[]>("../../../assets/data/animalAdopt.json").subscribe(data =>{
      return data;
    });
  }
  GetTop30():any{
    let adoptionPromote:Array<Adoption> = [];
    this.httpClient.get<Adoption[]>("../../../assets/data/animalAdopt.json").subscribe(data =>{
      
      let hasImage = data.filter(x => x.album_file != '');
      let info:Array<Adoption> = [];
      for(let i=0;i<30;i++){
        let random =  Math.floor(Math.random() * 30) + 1;
        info.push(hasImage[random]);
      }
      adoptionPromote = info;
    });
    return adoptionPromote;
  }
}

export class Adoption{
  animal_id:number;
  animal_subid:string;
  animal_area_pkid:number;
  animal_shelter_pkid:number;
  animal_place:string;
  animal_kind:string;
  animal_sex:string;
  animal_bodytype:string;
  animal_colour:string;
  animal_age:string;
  animal_sterilization:string;
  animal_bacterin:string;
  animal_foundplace:string;
  animal_title:string;
  animal_status:string;
  animal_remark:string;
  animal_caption:string;
  animal_opendate:string;
  animal_closeddate:string;
  animal_update:string;
  animal_createtime:string;
  shelter_name:string;
  album_file:string;
  album_update:string;
  cDat:string;
  shelter_address:string;
  shelter_tel:string;
}
