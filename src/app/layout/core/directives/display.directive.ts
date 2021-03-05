import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDisplay]'
})
export class DisplayDirective {

  constructor(private el: ElementRef) {
    this.display(0);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.display(1);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.display(0);
  }

  private display(value: number) {
    this.el.nativeElement.style.opacity = value;
  }
}
