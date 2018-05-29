import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {CommonService} from './service/common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Profile';
  constructor(public objCommonService: CommonService) {
    this.objCommonService.gotoPage("profile",{id:100});
  }
  
}
