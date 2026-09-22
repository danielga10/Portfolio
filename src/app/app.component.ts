import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface EstudioItem {
  titulo: string;
  centro: string;
  lugar: string;
  periodo: string;
}

interface ExperienciaItem {
  puesto: string;
  empresa: string;
  periodo: string;
  descripcion: string;
  stack: string[];
}

interface StackLayer {
  capa: string;
  tecnologias: string[];
}

interface Proyecto {
  nombre: string;
  descripcion: string;
  stack: string[];
  enlace?: string;
  estado: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isDarkMode = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        this.isDarkMode = false;
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        this.isDarkMode = true;
        document.documentElement.removeAttribute('data-theme');
      }
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    }
  }
  readonly nombre = 'Daniel Garduño Amador';
  readonly titulo = 'Desarrollador Full Stack Junior';
  readonly ubicacion = 'Sevilla, España';
  readonly disponibilidad = 'Disponible para incorporación inmediata';
  readonly anioActual = new Date().getFullYear();

  readonly enlaces = {
    linkedin: 'https://www.linkedin.com/in/daniel-garduño-amador-649273293',
    github: 'https://github.com/danielga10',
    email: 'danielgarduno2003@gmail.com',
  };

  readonly sobreMi = [
    'Tengo 22 años y estoy terminando mi formación como desarrollador full stack en Sevilla. Vengo de un perfil técnico de telecomunicaciones, así que entiendo tanto la infraestructura como el código que corre sobre ella.',
    'Me interesa el desarrollo web de extremo a extremo: interfaces con Angular, APIs con .NET y Spring Boot, y todo lo que conecta ambos lados. Busco mi primera posición estable como programador en Sevilla.',
  ];

  readonly estudios: EstudioItem[] = [
    {
      titulo: 'Grado Superior en Desarrollo de Aplicaciones Web',
      centro: 'IES Alixar',
      lugar: 'Castilleja de la Cuesta',
      periodo: '2024 — 2026',
    },
    {
      titulo: 'Grado Superior en Telecomunicaciones y Sistemas Informáticos',
      centro: 'CPIFP Los Viveros',
      lugar: 'Sevilla',
      periodo: '2022 — 2024',
    },
    {
      titulo: 'Bachillerato Tecnológico',
      centro: 'IES Los Álamos',
      lugar: 'Bormujos',
      periodo: '2019 — 2021',
    },
  ];

  readonly experiencia: ExperienciaItem[] = [
    {
      puesto: 'Junior Programador Full Stack .NET',
      empresa: 'NTT Data',
      periodo: 'Febrero 2026 — Junio 2026',
      descripcion:
        'Desarrollo y mantenimiento de funcionalidades en aplicaciones .NET dentro de un equipo full stack, participando en el ciclo completo: control de versiones, revisión de código y despliegue.',
      stack: ['.NET', 'SQL', 'Git'],
    },
    {
      puesto: 'Técnico Instalador de Fibra Óptica',
      empresa: 'Freelance / Contrata',
      periodo: 'Marzo 2024 — Junio 2024',
      descripcion:
        'Instalación y puesta en marcha de redes de fibra óptica FTTH. Base práctica en redes y conectividad que hoy aplico para entender la infraestructura sobre la que corren mis aplicaciones.',
      stack: ['Redes', 'FTTH'],
    },
  ];

  readonly stack: StackLayer[] = [
    { capa: 'Frontend', tecnologias: ['Angular', 'JavaScript'] },
    { capa: 'Backend', tecnologias: ['.NET', 'Spring Boot', 'Java', 'PHP'] },
    { capa: 'Datos', tecnologias: ['SQL'] },
    { capa: 'Herramientas', tecnologias: ['Git'] },
  ];

  readonly proyectos: Proyecto[] = [
    {
      nombre: 'Legend Motors',
      descripcion:
        'Sitio web para un concesionario especializado en coches americanos clásicos, de los años 70 a los 90. Catálogo de vehículos, fichas técnicas y diseño con estética retro americana.',
      stack: ['Angular', 'JavaScript'],
      estado: 'Proyecto personal',
    },
  ];
}
