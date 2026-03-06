import { Component, OnInit, signal, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
//import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
  imports: [
    //NgOptimizedImage,
    RouterLink,
  ],
})
export class ProjectDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);

  projectId = signal<string | null>(null);

  projectData = signal<any | null>(null);

  // Quick mock data for the 3 projects for the details view
  private allProjects: Record<string, any> = {
    '1': {
      title: 'Granja Mi Pollo',
      overview:
        'Un panel de control completo para análisis de datos empresariales que combina vistas interactivas con un diseño moderno. El proyecto implementa gráficos en tiempo real, métricas personalizables y una interfaz intuitiva que permite a los usuarios tomar decisiones informadas basadas en datos actualizados.',
      tags: ['Angular', 'PrimeNG', 'Typescript', 'Google Maps API', 'Supabase', 'PostgreSQL'],
      features: [
        {
          title: 'Búsqueda de mejor ruta',
          description:
            'La aplicacion permite crear rutas a partir de un conjunto de pedidos pendientes. Se utiliza la API de Google Maps para optimizar el orden de los pedidos en base al mejor camino, reduciendo los tiempos de entrega.',
          mediaType: 'video',
          media: 'assets/granja/create_ruta.mp4',
          layout: 'left',
        },
        {
          title: 'Visualización de Datos en Tiempo Real',
          description:
            'Implementé un sistema de dashboards interactivos que permite a los usuarios visualizar métricas clave de negocio en tiempo real. Utilicé Chart.js para crear gráficos dinámicos y responsivos que se actualizan automáticamente con nuevos datos.',
          mediaType: 'image',
          media: 'assets/granja/rutas.jpg',
          layout: 'right',
        },
        {
          title: 'Gestión de Clientes y Creación de Tickets',
          description:
            'La Gestion de Clientes permite crear y modificar los datos personales, realizar busqueda con filtros para encontrar rapidamente los clientes deudores, tambien permite crear tickets de compra y pago de deudas, los cuales se entregan al cliente de forma impresa como comprobante de compra.',
          mediaType: 'video',
          media: 'assets/granja/clientes.mp4',
          layout: 'left',
        },
      ],
    },
    '2': {
      title: 'E-commerce Platform',
      overview:
        'Plataforma de comercio electrónico moderna, rápida y segura, diseñada para maximizar la conversión.',
      tags: ['Angular', 'PrimeNG', 'Typescript', 'Google Maps API', 'Supabase', 'PostgreSQL'],
      features: [
        {
          title: 'Experiencia de Compra Fluida',
          description:
            'Integración perfecta con Stripe para pagos seguros y un flujo de checkout optimizado que reduce el abandono del carrito en un 30%.',
          img: 'assets/project2-detail1.png',
          layout: 'left',
        },
        {
          title: 'Visualización de Datos en Tiempo Real',
          description:
            'Implementé un sistema de dashboards interactivos que permite a los usuarios visualizar métricas clave de negocio en tiempo real. Utilicé Chart.js para crear gráficos dinámicos y responsivos que se actualizan automáticamente con nuevos datos.',
          img: 'assets/granja/dashboard.mp4',
          layout: 'right',
        },
        {
          title: 'Gestión de Clientes y Creación de Tickets',
          description:
            'La Gestion de Clientes permite crear y modificar los datos personales, realizar busqueda con filtros para encontrar rapidamente los clientes deudores, tambien permite crear tickets de compra y pago de deudas, los cuales se entregan al cliente de forma impresa como comprobante de compra.',
          img: 'assets/granja/clientes.mp4',
          layout: 'left',
        },
      ],
    },
    '3': {
      title: 'Fitness Tracker App',
      overview: 'Tu compañero personal de salud y bienestar, directamente en tu bolsillo.',
      tags: ['Angular', 'PrimeNG', 'Typescript', 'Google Maps API', 'Supabase', 'PostgreSQL'],
      features: [
        {
          title: 'Seguimiento Preciso',
          description:
            'Sincronización con dispositivos wearables gracias a una integración robusta con varias APIs de salud, ofreciendo un panorama completo de tu actividad diaria.',
          img: 'assets/project3-detail1.png',
          layout: 'left',
        },
        {
          title: 'Visualización de Datos en Tiempo Real',
          description:
            'Implementé un sistema de dashboards interactivos que permite a los usuarios visualizar métricas clave de negocio en tiempo real. Utilicé Chart.js para crear gráficos dinámicos y responsivos que se actualizan automáticamente con nuevos datos.',
          img: 'assets/granja/dashboard.mp4',
          layout: 'right',
        },
        {
          title: 'Gestión de Clientes y Creación de Tickets',
          description:
            'La Gestion de Clientes permite crear y modificar los datos personales, realizar busqueda con filtros para encontrar rapidamente los clientes deudores, tambien permite crear tickets de compra y pago de deudas, los cuales se entregan al cliente de forma impresa como comprobante de compra.',
          img: 'assets/granja/clientes.mp4',
          layout: 'left',
        },
      ],
    },
  };

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.projectId.set(id);
      if (id && this.allProjects[id]) {
        this.projectData.set(this.allProjects[id]);
      } else {
        // Fallback or handle 404
      }
    });
  }
}
