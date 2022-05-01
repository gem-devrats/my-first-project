import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectivere]'
})
export class DirectivereDirective {

  constructor(ele:ElementRef) { 
    ele.nativeElement.style.color = 'yellow'
  }
}
