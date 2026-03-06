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
  isMenuOpen = signal(false);
  isScrolled = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((val) => !val);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.closeMenu();
  }
}
