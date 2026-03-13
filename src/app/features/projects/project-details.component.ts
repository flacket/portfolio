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
      title: 'Venenosos San Juan',
      overview:
        'Esta aplicación móvil nació en el marco de un proyecto de extensión de la Universidad Nacional de San Juan. Es una herramienta integral diseñada para mitigar los accidentes con fauna ponzoñosa en la provincia.\n\nEl sistema combina la divulgación científica con la ciencia ciudadana, permitiendo a los usuarios identificar especies, acceder a protocolos de primeros auxilios y reportar avistamientos. La interfaz está optimizada para ser utilizada por trabajadores rurales, estudiantes, docentes y personal de enfermería.\n\nLa aplicación transforma el smartphone en una herramienta de educación ambiental, promoviendo un cambio en la percepción social de la fauna local y fortaleciendo la prevención comunitaria. En sus primeras semanas fue descargada por más de 1300 usuarios, con una calificación de 4.9 estrellas en la',
      tags: ['Flutter', 'Supabase', 'PostgreSQL', 'Github'],
      features: [
        {
          title: 'Identificación y Catálogo Multimedia',
          description:
            'La aplicación permite a los usuarios distinguir de forma rápida y precisa entre especies de importancia médica y aquellas inofensivas mediante fichas técnicas claras y comparativas visuales.\n\nUno de los mayores retos fue garantizar que la aplicación fuera funcional en zonas rurales o de montaña, donde la conectividad es nula o inestable. \n\nPara ello, implementamos una estrategia de almacenamiento local (caché/SQLite) que descarga y sincroniza el catálogo de especies. Esto permite que el usuario acceda a información vital sin depender de una conexión a internet.',
          mediaType: 'image',
          media: 'assets/venenosos/lista.jpg',
          layout: 'left',
        },
        {
          title: 'Sistema de Reporte (Ciencia Ciudadana)',
          description:
            'El módulo de Ciencia Ciudadana requiere enviar datos y fotos de avistamientos de los usuarios al servidor, lo cual es imposible sin señal.\n\nSe desarrolló un sistema de cola de tareas. Cuando un usuario registra un animal sin conexión, el reporte se guarda localmente; una vez que el dispositivo detecta una conexión estable, la app sincroniza automáticamente los datos pendientes en segundo plano.',
          mediaType: 'image',
          media: 'assets/venenosos/form.jpg',
          layout: 'right',
        },
        {
          title: 'Protocolos de Emergencia y Prevención',
          description:
            'La aplicación funciona como una guía de bolsillo para primeros auxilios. Incluye instrucciones paso a paso sobre cómo actuar ante una picadura o mordedura y, mediante la ubicación del usuario, ayuda a localizar el centro de salud más cercano, optimizando los tiempos de atención médica.',
          mediaType: 'image',
          media: 'assets/venenosos/menu.jpg',
          layout: 'left',
        },
      ],
    },
    '3': {
      title: 'SIAP Veladero',
      overview:
        'Sistema de gestión de recursos, obligaciones y permisos ambientales en una empresa minera.',
      tags: ['Vue', 'Bootstrap', 'HTML', 'CSS'],
      features: [
        {
          title: 'Detalles del Desarrollo',
          description:
            'Estructuré la interfaz de usuario para un sistema de gestión de recursos en una empresa del sector minero, adaptando un sistema access basado en ventanas a una interfaz web moderna y responsive.\n\nDesarrollé las pantallas de gestión de permisos ambientales, asegurando el cumplimiento de los flujos de trabajo.',
          mediaType: 'video',
          media: 'assets/veladero/features.mp4',
          layout: 'center',
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
