import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';

@Component({
  selector: 'app-btn-scroll-top',
  imports: [],
  templateUrl: './btn-scroll-top.component.html',
  styleUrl: './btn-scroll-top.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnScrollTopComponent {
  private readonly viewportScroller = inject(ViewportScroller);

  isShowScrollButton = signal(false);
  private readonly SCROLL_THRESHOLD = 300;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollPosition = this.viewportScroller.getScrollPosition()[1];
    this.isShowScrollButton.set(scrollPosition > this.SCROLL_THRESHOLD);
  }

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  ngOnInit(): void {
    this.onWindowScroll(); // Initial check on load
  }
}
