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

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import {Subscription} from 'rxjs/Subscription';
import {Location} from '@angular/common';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {
  dbinfo: { environment: string, instance: string, database: string };
  paramSubscription: Subscription;
  public data: Object;
  public temp_var: Object = false;
  environments: any;
  private alive = true;

  getEnvironments(): void {
    this.dataService.getEnvironments().then(environments => this.environments = environments);
  }

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService
  ) {
    dataService.environments$.takeWhile(() => this.alive).subscribe(
      environments => {
        this.getEnvironments();
        console.log(this.environments);
      });
  }

  ngOnInit(): void {
    this.dbinfo = {
      environment: this.route.snapshot.params['environment'],
      instance: this.route.snapshot.params['instance'],
      database: this.route.snapshot.params['database']
    };
    this.paramSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.dbinfo.environment = params['environment'];
          this.dbinfo.instance = params['instance'];
          this.dbinfo.database = params['database'];
        }
      );
    this.http.get('http://localhost:8090/statuses/getStatusTree?environment='
      + this.dbinfo.environment
      + '&instanceName='
      + this.dbinfo.instance
      + '&databaseName='
      + this.dbinfo.database)
      .subscribe((res: Response) => {
        this.data = res;
        this.temp_var = true;
      });
  }

  goBack(): void {
    this.location.back();
  }

}
