import {
  Component,
  PLATFORM_ID,
  inject,
  signal,
  computed,
  effect,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FadeInDirective } from '../../../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  imports: [FadeInDirective],
  host: {
    '(window:mousemove)': 'onMouseMove($event)',
  },
})
export class HeroComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  // Parallax signals
  orb1Transform = signal('translate(0px, 0px)');
  orb2Transform = signal('translate(0px, 0px)');
  orb3Transform = signal('translate(0px, 0px)');

  // Typing effect signals
  private textArray = ['SaaS Builder', 'Creative mind', 'Web Developer', 'Problem Solver'];
  private textArrayIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  displayedText = signal('');

  private typingTimeout: any;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.typingTimeout = setTimeout(() => this.typeText(), 1000);
    }
  }

  ngOnDestroy() {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
  }

  onMouseMove(e: MouseEvent) {
    if (!isPlatformBrowser(this.platformId)) return;

    const calculateTransform = (index: number) => {
      const speed = (index + 1) * 20;
      const x = ((window.innerWidth / 2 - e.pageX) * speed) / 1000;
      const y = ((window.innerHeight / 2 - e.pageY) * speed) / 1000;
      return `translate(${x}px, ${y}px)`;
    };

    this.orb1Transform.set(calculateTransform(0));
    this.orb2Transform.set(calculateTransform(1));
    this.orb3Transform.set(calculateTransform(2));
  }

  private typeText() {
    if (!isPlatformBrowser(this.platformId)) return;

    const currentString = this.textArray[this.textArrayIndex];
    let typingDelay = 100;

    if (this.isDeleting) {
      this.displayedText.set(currentString.substring(0, this.charIndex - 1));
      this.charIndex--;
      typingDelay = 50;
    } else {
      this.displayedText.set(currentString.substring(0, this.charIndex + 1));
      this.charIndex++;
    }

    if (!this.isDeleting && this.charIndex === currentString.length) {
      typingDelay = 2000; // Pause at end
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textArrayIndex++;
      typingDelay = 500; // Pause before typing new word

      if (this.textArrayIndex >= this.textArray.length) {
        this.textArrayIndex = 0;
      }
    }

    this.typingTimeout = setTimeout(() => this.typeText(), typingDelay);
  }
}
