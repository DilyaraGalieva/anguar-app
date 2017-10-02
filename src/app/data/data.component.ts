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

import {Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  public data_mars: Object;
  public data_earth: Object;
  public data_epicqe1: Object;
  public data_epicqe2: Object;
  public data_epicqe3: Object;
  public data_perf: Object;
  public data_sec: Object;
  public temp_var: Object = false;
  environments: any;
  private alive = true;

  getEnvironments(): void {
    this.dataService.getEnvironments().then(environments => this.environments = environments);
  }

  constructor(private http: HttpClient, private dataService: DataService) {
    dataService.environments$.takeWhile(() => this.alive).subscribe(
      environments => {
        this.getEnvironments();
        console.log(this.environments);
      });
  }

  ngOnInit(): void {
    this.getEnvironments();
    this.http.get('http://localhost:8090/statuses/getStatus?environment=mars').subscribe((res: Response) => {
      this.data_mars = res;
      console.log(this.data_mars);
      this.temp_var = true;
    });
    this.http.get('http://localhost:8090/statuses/getStatus?environment=earth').subscribe((res: Response) => {
      this.data_earth = res;
      console.log(this.data_earth);
      this.temp_var = true;
    });
    this.http.get('http://localhost:8090/statuses/getStatus?environment=epicqe1').subscribe((res: Response) => {
      this.data_epicqe1 = res;
      console.log(this.data_epicqe1);
      this.temp_var = true;
    });
    this.http.get('http://localhost:8090/statuses/getStatus?environment=epicqe2').subscribe((res: Response) => {
      this.data_epicqe2 = res;
      console.log(this.data_epicqe2);
      this.temp_var = true;
    });
    this.http.get('http://localhost:8090/statuses/getStatus?environment=epicqe3').subscribe((res: Response) => {
      this.data_epicqe3 = res;
      console.log(this.data_epicqe3);
      this.temp_var = true;
    });
    this.http.get('http://localhost:8090/statuses/getStatus?environment=perf').subscribe((res: Response) => {
      this.data_perf = res;
      console.log(this.data_perf);
      this.temp_var = true;
    });
    this.http.get('http://localhost:8090/statuses/getStatus?environment=sec').subscribe((res: Response) => {
      this.data_sec = res;
      console.log(this.data_sec);
      this.temp_var = true;
    });
  }

}
