import {ElementRef, HostListener, Output, EventEmitter} from '@angular/core'

export default class OnScrolledDown{
  private scrolled = false;
  constructor(private elRef: ElementRef, private window: Window) {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event) {
    let scrolled = (this.elRef.nativeElement.offsetTop + this.elRef.nativeElement.offsetHeight - 50 /*header height*/) < this.window.scrollY;
    if(scrolled !== this.scrolled) {
      this.scrolled = scrolled;
      this.onScrolledDown.emit(scrolled);
    }
  }

  @Output() onScrolledDown: EventEmitter<boolean> = new EventEmitter();
}
