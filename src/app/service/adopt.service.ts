import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdoptService {
    
  constructor(private httpClient: HttpClient) { }

  GetAll(){
    this.httpClient.get("../../../assets/data/animalAdopt.json").subscribe(data =>{
      console.log(data);
    })
  }
}
