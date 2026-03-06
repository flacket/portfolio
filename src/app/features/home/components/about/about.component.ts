import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FadeInDirective } from '../../../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  imports: [NgOptimizedImage, FadeInDirective],
})
export class AboutComponent {}
