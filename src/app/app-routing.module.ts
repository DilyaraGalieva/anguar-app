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
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StatusComponent} from './status/status.component';
import {ErrorpageComponent} from './errorpage/errorpage.component';
import {DataComponent} from './data/data.component';

const appRoutes: Routes = [
  {path: '', component: DataComponent},
  {path: 'environment/ :environment', component: DataComponent},
  {path: 'status/:environment/:instance/:database', component: StatusComponent},
  {path: 'not-found', component: ErrorpageComponent, data: {message: 'Page not found!'} },
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
