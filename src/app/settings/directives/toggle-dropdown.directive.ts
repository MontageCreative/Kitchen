import {Directive, ElementRef} from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appToggleDropdown]'
})
export class ToggleDropdownDirective {
  public currentElement;

  constructor(el: ElementRef) {
    this.currentElement = el;
    this.currentElement.nativeElement.onclick = function(){
      $(this).closest('.toggleParent')
        .find('.dropdown')
        .slideToggle();
      $(this)
        .children('.toggleIcon')
        .toggleClass('fa-rotate-180');
    };
  }

}
