import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveclassDirective{
  @HostBinding('class.active') isActive = false;

  @HostListener('click') makeActive() {
    this.isActive = !this.isActive;
    if (this.isActive) {
    } else {
    }
  }
}
