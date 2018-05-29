import { Component, OnInit } from '@angular/core';

import {CommonService} from './../../service/common.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public objCommonService: CommonService) { }

  ngOnInit() {
  }

}
