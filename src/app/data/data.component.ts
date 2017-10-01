/******************************************************************************
 *                                                                            *
 * Copyright (c) 2017 by ACI Worldwide Inc.                                   *
 * All rights reserved.                                                       *
 *                                                                            *
 * This software is the confidential and proprietary information of ACI       *
 * Worldwide Inc ("Confidential Information"). You shall not disclose such    *
 * Confidential Information and shall use it only in accordance with the      *
 * terms of the license agreement you entered with ACI Worldwide Inc.         *
 ******************************************************************************/

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  public data: Object;
  public temp_var: Object = false;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    // this.http.get('http://localhost:8090/getStatus').subscribe((res: Response) => {
    this.http.get('assets/data/marsmainversions.json').subscribe((res: Response) => {
      this.data = res;
      console.log(this.data);
      this.temp_var = true;
    });
  }

}
