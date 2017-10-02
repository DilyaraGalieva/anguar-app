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

import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EnvironmentsComponent } from './environments/environments.component';
import { DataComponent } from './data/data.component';
import { StatusComponent } from './status/status.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import {ActiveclassDirective} from './directives/activeclass.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EnvironmentsComponent,
    DataComponent,
    StatusComponent,
    ErrorpageComponent,
    ActiveclassDirective
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
