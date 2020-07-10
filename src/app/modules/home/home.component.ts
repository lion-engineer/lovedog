import { Component, OnInit } from '@angular/core';

import {AdoptService} from '../../service/adopt.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(adoptService:AdoptService) { }

  ngOnInit(): void {
  }

}
