import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FadeInDirective } from '../../../../shared/directives/fade-in.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports: [ReactiveFormsModule, FadeInDirective, CommonModule],
})
export class ContactComponent {
  contactForm: FormGroup;
  status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.status.set('sending');

    try {
      // simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      this.status.set('success');
      this.contactForm.reset();

      // hide success message after 5 seconds
      setTimeout(() => this.status.set('idle'), 5000);
    } catch {
      this.status.set('error');
    }
  }
}
