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
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html',
  styleUrls: ['./environments.component.css']
})
export class EnvironmentsComponent implements OnInit {
  environments: Array<string>;
  constructor(private dataService: DataService) { }

  getEnvironments(): void {
    this.dataService.getEnvironments().then(environments => this.environments = environments);
  }

  ngOnInit(): void {
    this.getEnvironments();
  }

  onEnvironmentClick(env) {
    this.dataService.setEnvironment(env);
    this.getEnvironments();
  }

}
