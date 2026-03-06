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
      tags: ['React', 'D3.js', 'Node.js'],
    },
    {
      id: '2',
      title: 'E-commerce Platform',
      description:
        'Plataforma de comercio electrónico completa con carrito de compras y pasarela de pago.',
      imageUrl: 'assets/project2.png',
      tags: ['Angular', 'NgRx', 'Stripe'],
    },
    {
      id: '3',
      title: 'Fitness Tracker App',
      description:
        'Aplicación móvil para seguimiento de actividad física con gráficos en tiempo real.',
      imageUrl: 'assets/project3.png',
      tags: ['Flutter', 'Firebase', 'Chart.js'],
    },
  ]);
}
