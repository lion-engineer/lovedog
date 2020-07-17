import { Component, OnInit } from '@angular/core';
import {AdoptService} from '../../service/adopt.service'


@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.scss']
})
export class AdoptionComponent implements OnInit {

  constructor(private adoptService:AdoptService) { 
    
  }

  ngOnInit(): void {
    this.adoptService.GetAll();
  }
}
