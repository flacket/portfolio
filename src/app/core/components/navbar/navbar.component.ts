import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  host: {
    '(window:scroll)': 'onWindowScroll()',
    '[class.scrolled]': 'isScrolled()',
  },
})
export class NavbarComponent {
  isScrolled = signal(false);

  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
