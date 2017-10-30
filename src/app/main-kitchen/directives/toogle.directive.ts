import { Directive, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appToogle]'
})
export class ToogleDirective {
  public currentElement;
  constructor(el: ElementRef) {
    this.currentElement = el;
    this.currentElement.nativeElement.onclick = function(){
      $(this).toggleClass('open');
      $(this)
        .siblings()
        .slideToggle();
      $(this)
        .children('.dropIcon')
        .toggleClass('fa-rotate-180');
    };
  }
}
