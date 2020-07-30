import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LostService {

  constructor() { }
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