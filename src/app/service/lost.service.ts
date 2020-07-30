import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LostService {
  imageToShow: any;

  constructor(private httpClient: HttpClient) { }

  getImage(imageUrl: string): Observable<Blob> {
    return this.httpClient.get(imageUrl, { responseType: 'blob' });
  }



}


export class LostPet {
  KeyNo: string;
  icnumber: string;
  petname: string;
  petKind: string;
  petsex: string;
  variety: string;
  color: string;
  exterior: string;
  feature: string;
  misstime: string;
  misslocation: string;
  owner: string;
  tel: string;
  EMail: string;
  PICTURE: string;
}