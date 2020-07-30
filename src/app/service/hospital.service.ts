import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private httpClient:HttpClient) { }

  getHostpital():Observable<HospitalInfo[]>{
    return this.httpClient.get<HospitalInfo[]>("./assets/data/animalHostpital.json");
  }
}
export class HospitalInfo{
  counties: string;
  certificateNumber: string;
  kind: string;
  status: string;
  name: string;
  doctor: string;
  tel: string;
  issuedDate: string;
  address: string;
}