import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

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
  activeSection = signal<string>('home');
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);
  private observer: IntersectionObserver | null = null;

  constructor() {
    afterNextRender(() => {
      this.initScrollSpy();

      // Re-initialize when navigating back to home (or any route change)
      this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
        this.initScrollSpy();
      });
    });

    this.destroyRef.onDestroy(() => {
      this.observer?.disconnect();
    });
  }

  private initScrollSpy() {
    this.observer?.disconnect();

    const options = {
      root: null,
      rootMargin: '-15% 0px -80% 0px', // Detects sections in a 5% bar at 15% from top
      threshold: 0,
    };

    this.observer = new IntersectionObserver((entries) => {
      // Find the first intersecting entry from the received entries
      // IntersectionObserver often sends the entry that just changed
      const intersectingEntry = entries.find((e) => e.isIntersecting);
      if (intersectingEntry) {
        this.activeSection.set(intersectingEntry.target.id);
      }
    }, options);

    const sections = ['home', 'about', 'projects', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        this.observer?.observe(element);
      }
    });
  }

  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
