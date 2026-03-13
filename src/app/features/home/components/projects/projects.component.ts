import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FadeInDirective } from '../../../../shared/directives/fade-in.directive';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [NgOptimizedImage, RouterLink, FadeInDirective],
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      id: '1',
      title: 'Granja Mi Pollo',
      description:
        'sistema integral (web y Android) para la gestión logística de clientes, pedidos, empleados y sucursales.',
      imageUrl: 'assets/granja/logo.jpg',
      tags: ['Angular', 'PrimeNG', 'Typescript', 'Google Maps API', 'Supabase', 'PostgreSQL'],
    },
    {
      id: '2',
      title: 'Venenosos San Juan',
      description:
        'Aplicación móvil que permite identificar arañas, escorpiones y serpientes de importancia médica en la provincia de San Juan.',
      imageUrl: 'assets/venenosos/logo.jpg',
      tags: ['Flutter', 'Supabase', 'PostgreSQL', 'Github'],
    },
    {
      id: '3',
      title: 'SIAP Veladero',
      description:
        'Sistema de gestión de recursos, obligaciones y permisos ambientales en una empresa minera.',
      imageUrl: 'assets/veladero/logo.jpg',
      tags: ['Vue', 'Bootstrap', 'HTML', 'CSS'],
    },
  ]);
}
