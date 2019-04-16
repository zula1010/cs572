import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { formatNumber } from '@angular/common';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {

  @HostBinding('style.font-size') size;
  @HostListener('click') newFont() {
    this.size = parseInt(this.ele.nativeElement.style.fontSize) + 2 + 'px';
  }
  constructor(private ele: ElementRef, private renderer: Renderer2) {
  }
  ngOnInit() {
    this.size = '16px';
  }


}
