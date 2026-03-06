import { Directive, ElementRef, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appFadeIn]',
})
export class FadeInDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | undefined;
  private platformId = inject(PLATFORM_ID);

  constructor(private el: ElementRef) {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.el.nativeElement.classList.add('visible');
              if (this.observer) {
                this.observer.unobserve(entry.target);
              }
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px',
        },
      );
    }
  }

  ngOnInit() {
    if (this.observer) {
      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
