import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {
  @Input() visible;


  constructor(private ele: ElementRef, private renderer: Renderer2) {
  }
  ngOnInit() {
    console.log(this.visible)
    if (this.visible) {
      this.renderer.setStyle(this.ele.nativeElement, 'display', 'true')
    }
    else {
      this.renderer.setStyle(this.ele.nativeElement, 'display', 'none')
    }

  }
}
