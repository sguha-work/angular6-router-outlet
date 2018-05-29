import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {CommonService} from './../../service/common.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public model: any;

  constructor(public objCommonService: CommonService, private route: ActivatedRoute) { 
    this.model = {};
  }

  ngOnInit() {
    this.model.id = this.route.snapshot.paramMap.get('id');
  }

}
