import { type ProjectData } from "@/types";

export const projectsData: ProjectData[] = [
  {
    id: "achs-cli",
    name: "ACHS CLI",
    version: "v1.0.0",
    architecture: {
      es: "Librería de línea de comandos",
      en: "Command-line interface library",
    },
    architectureDetail: {
      es: "Herramienta CLI para generar archivos de NESTJS",
      en: "CLI tool for generating NESTJS files",
    },
    techStack: ["NestJS", "TypeScript", "NPM"],
    status: "deployed",
    lastUpdate: "2026-05-14T21:27:00-04:00",
    image: "/portfolio/projects/achs-cli.png",
    description: {
      es: "Librería de línea de comandos para generar archivos de NESTJS con una estructura predefinida, facilitando el desarrollo rápido de aplicaciones backend.",
      en: "Command-line interface library for generating NESTJS files with a predefined structure, facilitating rapid backend application development.",
    },
    fullDescription: {
      es: "ACHS CLI es una herramienta de línea de comandos diseñada para acelerar el desarrollo de aplicaciones backend utilizando el framework NESTJS. Con una estructura predefinida y comandos intuitivos, permite a los desarrolladores generar rápidamente controladores, servicios, módulos y otros componentes esenciales, siguiendo las mejores prácticas de NESTJS. Esta librería es ideal para proyectos que buscan una configuración rápida y eficiente, reduciendo el tiempo de setup inicial y permitiendo a los desarrolladores centrarse en la lógica de negocio.",
      en: "ACHS CLI is a command-line interface tool designed to accelerate backend application development using the NESTJS framework. With a predefined structure and intuitive commands, it allows developers to quickly generate controllers, services, modules, and other essential components, following NESTJS best practices. This library is ideal for projects seeking a fast and efficient setup, reducing initial setup time and allowing developers to focus on business logic.",
    },
    features: {
      es: [
        "Generación rápida de archivos NESTJS con comandos simples",
        "Estructura predefinida para mantener la consistencia del proyecto",
        "Soporte para controladores, servicios, módulos y más",
        "Integración con NPM para fácil instalación y actualización",
        "Documentación clara y ejemplos de uso",
      ],
      en: [
        "Fast generation of NESTJS files with simple commands",
        "Predefined structure to maintain project consistency",
        "Support for controllers, services, modules, and more",
        "Integration with NPM for easy installation and updates",
        "Clear documentation and usage examples",
      ],
    },
    challenges: {
      es: [
        "Optimización de la generación de archivos para reducir la latencia",
        "Implementación de una estructura flexible que se adapte a diferentes estilos de proyectos",
        "Manejo de dependencias y versiones para asegurar compatibilidad",
      ],
      en: [
        "Optimization of file generation to reduce latency",
        "Implementation of a flexible structure that adapts to different project styles",
        "Handling dependencies and versions to ensure compatibility",
      ],
    },
    githubUrl: "https://github.com/sorodriguezz/achs-nest-cli",
    demoUrl: "https://www.npmjs.com/package/achs-nest-cli",
    icon: "",
    color: "#28B827",
  },
];
