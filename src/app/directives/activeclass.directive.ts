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
import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveclassDirective {
  @Input() @HostBinding('class.active') isActive = false;

  @HostListener('click') makeActive() {
    this.isActive = !this.isActive;
  }
}
