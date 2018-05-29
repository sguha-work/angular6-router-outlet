import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private router: Router) {

  }
  public gotoPage(pageName: string, params?: any): Boolean {
    this.router.navigate(["/"+pageName], { queryParams: params });
    return false;
  }
}
