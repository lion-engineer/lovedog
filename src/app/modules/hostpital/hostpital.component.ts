import { Component, OnInit } from '@angular/core';
import{HospitalService, HospitalInfo} from "../../service/hospital.service"

@Component({
  selector: 'app-hostpital',
  templateUrl: './hostpital.component.html',
  styleUrls: ['./hostpital.component.scss']
})
export class HostpitalComponent implements OnInit {

  hospitalInfo:Array<HospitalInfo>;
  constructor(private hospitalService:HospitalService) { }

  ngOnInit(): void {
    this.getInfo();
  }
//https://www.google.com.tw/maps/place
  getInfo(){
    this.hospitalService.getHostpital().subscribe(data =>{
      let info: Array<HospitalInfo> = [];
      for (let i = 0; i < 9; i++) {
        let random = Math.floor(Math.random() *9) + 1;
        info.push(data[random]);
      }
      this.hospitalInfo = info;
      console.log(this.hospitalInfo);
    });
  }
}
