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
  {
    id: "dbml-studio",
    name: "DBML Studio",
    version: "v1.0.0",
    architecture: {
      es: "Editor de diagramas de base de datos",
      en: "Database diagram editor",
    },
    architectureDetail: {
      es: "Stitio web para crear y gestionar diagramas de base de datos utilizando el lenguaje DBML. Permite a los usuarios diseñar visualmente sus esquemas de base de datos y exportarlos en formato DBML para su uso en proyectos de desarrollo.",
      en: "Web application for creating and managing database diagrams using the DBML language. It allows users to visually design their database schemas and export them in DBML format for use in development projects.",
    },
    techStack: ["React", "TypeScript", "Node.js"],
    status: "deployed",
    lastUpdate: "2026-03-31T15:00:00-04:00",
    image: "/portfolio/projects/dbml-studio.png",
    description: {
      es: "DBML Studio es una aplicación web que facilita la creación y gestión de diagramas de base de datos utilizando el lenguaje DBML. Con una interfaz intuitiva, los usuarios pueden diseñar visualmente sus esquemas de base de datos, definir tablas, relaciones y atributos, y luego exportar su diseño en formato DBML para integrarlo fácilmente en sus proyectos de desarrollo.",
      en: "DBML Studio is a web application that facilitates the creation and management of database diagrams using the DBML language. With an intuitive interface, users can visually design their database schemas, define tables, relationships, and attributes, and then export their design in DBML format for easy integration into their development projects.",
    },
    fullDescription: {
      es: "DBML Studio es una herramienta esencial para desarrolladores y diseñadores de bases de datos que buscan una forma eficiente de visualizar y gestionar sus esquemas de base de datos. La aplicación ofrece una interfaz gráfica fácil de usar que permite a los usuarios arrastrar y soltar elementos para crear tablas, definir relaciones entre ellas y establecer atributos. Además, DBML Studio soporta la exportación de diagramas en formato DBML, lo que facilita su integración en proyectos de desarrollo que utilizan este lenguaje para definir esquemas de base de datos. Con DBML Studio, los usuarios pueden mejorar la colaboración y la comunicación entre equipos al proporcionar una representación visual clara de la estructura de la base de datos.",
      en: "DBML Studio is an essential tool for developers and database designers looking for an efficient way to visualize and manage their database schemas. The application offers an easy-to-use graphical interface that allows users to drag and drop elements to create tables, define relationships between them, and set attributes. Additionally, DBML Studio supports exporting diagrams in DBML format, making it easy to integrate into development projects that use this language to define database schemas. With DBML Studio, users can enhance collaboration and communication between teams by providing a clear visual representation of the database structure.",
    },
    features: {
      es: [
        "Interfaz gráfica intuitiva para diseñar esquemas de base de datos",
        "Soporte para tablas, relaciones y atributos",
        "Exportación de diagramas en formato DBML",
        "Colaboración en tiempo real para equipos de desarrollo",
        "Documentación y ejemplos para facilitar el uso",
      ],
      en: [
        "Intuitive graphical interface for designing database schemas",
        "Support for tables, relationships, and attributes",
        "Exporting diagrams in DBML format",
        "Real-time collaboration for development teams",
        "Documentation and examples to facilitate use",
      ],
    },
    challenges: {
      es: [
        "Optimización del rendimiento para manejar diagramas complejos",
        "Implementación de una interfaz de usuario intuitiva y fácil de usar",
        "Garantizar la compatibilidad con diferentes versiones del lenguaje DBML",
      ],
      en: [
        "Performance optimization to handle complex diagrams",
        "Implementation of an intuitive and user-friendly interface",
        "Ensuring compatibility with different versions of the DBML language",
      ],
    },
    githubUrl: "https://github.com/sorodriguezz/dbml-studio",
    demoUrl: "https://sorodriguezz.github.io/dbml-studio/",
    icon: "",
    color: "#5061E5",
  },
  {
    id: "sys-architect",
    name: "Sys Architect",
    version: "v1.0.0",
    architecture: {
      "es": "Herramienta de diseño de arquitectura de software",
      "en": "Software architecture design tool"
    },
    architectureDetail: {
      "es": "Aplicación web para diseñar y visualizar la arquitectura de software de proyectos. Permite a los usuarios crear diagramas de componentes, definir relaciones entre ellos y generar documentación técnica basada en el diseño arquitectónico.",
      "en": "Web application for designing and visualizing software architecture of projects. It allows users to create component diagrams, define relationships between them, and generate technical documentation based on the architectural design."
    },
    techStack: ["React", "NextJS", "TypeScript", "Node.js"],
    status: "deployed",
    lastUpdate: "2026-04-08T23:00:00-04:00",
    image: "/portfolio/projects/sys-architect.png",
    description: {
      "es": "Sys Architect es una herramienta de diseño de arquitectura de software que permite a los desarrolladores y arquitectos de software crear y visualizar la estructura de sus proyectos. Con una interfaz intuitiva, los usuarios pueden diseñar diagramas de componentes, definir las relaciones entre ellos y generar documentación técnica basada en el diseño arquitectónico. Esta aplicación es ideal para equipos de desarrollo que buscan mejorar la comunicación y la colaboración al proporcionar una representación visual clara de la arquitectura del software.",
      "en": "Sys Architect is a software architecture design tool that allows developers and software architects to create and visualize the structure of their projects. With an intuitive interface, users can design component diagrams, define relationships between them, and generate technical documentation based on the architectural design. This application is ideal for development teams looking to improve communication and collaboration by providing a clear visual representation of the software architecture."
    },
    fullDescription: {
      "es": "Sys Architect es una aplicación web diseñada para ayudar a los desarrolladores y arquitectos de software a crear y visualizar la arquitectura de sus proyectos. La herramienta ofrece una interfaz gráfica fácil de usar que permite a los usuarios diseñar diagramas de componentes, definir las relaciones entre ellos y generar documentación técnica basada en el diseño arquitectónico. Con Sys Architect, los equipos de desarrollo pueden mejorar la comunicación y la colaboración al proporcionar una representación visual clara de la arquitectura del software, lo que facilita la toma de decisiones y la planificación del desarrollo.",
      "en": "Sys Architect is a web application designed to help developers and software architects create and visualize the architecture of their projects. The tool offers an easy-to-use graphical interface that allows users to design component diagrams, define relationships between them, and generate technical documentation based on the architectural design. With Sys Architect, development teams can improve communication and collaboration by providing a clear visual representation of the software architecture, facilitating decision-making and development planning."
    },
    features: {
      "es": [
        "Interfaz gráfica intuitiva para diseñar la arquitectura de software",
        "Soporte para diagramas de componentes y relaciones",
        "Generación de documentación técnica basada en el diseño arquitectónico",
        "Colaboración en tiempo real para equipos de desarrollo",
        "ocumentación y ejemplos para facilitar el uso"
      ],
      "en": [
        "Intuitive graphical interface for designing software architecture",
        "Support for component diagrams and relationships",
        "Generation of technical documentation based on architectural design",
        "Real-time collaboration for development teams",
        "Documentation and examples to facilitate use"
      ]
    },
    challenges: {
      "es": [
        "Optimización del rendimiento para manejar diagramas complejos",
        "Implementación de una interfaz de usuario intuitiva y fácil de usar",
        "Garantizar la compatibilidad con diferentes estilos de diseño arquitectónico"
      ],
      "en": [
        "Performance optimization to handle complex diagrams",
        "Implementation of an intuitive and user-friendly interface",
        "Ensuring compatibility with different architectural design styles"
      ]
    },
    githubUrl: "https://github.com/sorodriguezz/system-architect",
    demoUrl: "https://sorodriguezz.github.io/system-architect/",
    icon: "",
    color: "#E94E77"
  },
  {
    id: "mcp-achs-dev",
    name: "MCP ACHS Dev",
    version: "v2.0.0",
    architecture: {
      "es": "Model Context Protocol para gestión de proyectos de desarrollo",
      "en": "Model Context Protocol for development project management"
    },
    architectureDetail: {
      "es": "MCP ACHS Dev es una herramienta que permite dar funcionalidades extras a un LLM, por ejemplo tener Tools para realizar Queries a bases de datos, consultas a Azure Devops, Azure Wiki, etc.",
      "en": "MCP ACHS Dev is a tool that allows adding extra functionalities to an LLM, for example having Tools to perform Queries to databases, Azure Devops queries, Azure Wiki, etc."
    },
    techStack: ["NestJS", "TypeScript", "Node.js", "MCP"],
    status: "deployed",
    lastUpdate: "2026-04-01T16:25:00-04:00",
    image: "/portfolio/projects/mcp-achs-dev.png",
    description: {
      "es": "MCP ACHS Dev es una aplicación diseñada para ayudar a los equipos de desarrollo a gestionar sus proyectos de manera más eficiente utilizando el protocolo Model Context Protocol (MCP). La herramienta permite a los usuarios definir modelos de contexto para sus proyectos, lo que facilita la comunicación y colaboración entre los miembros del equipo. Con MCP ACHS Dev, los equipos pueden compartir información relevante sobre el proyecto, coordinar tareas y mantener un seguimiento claro del progreso, lo que mejora la productividad y la gestión de proyectos complejos.",
      "en": "MCP ACHS Dev is an application designed to help development teams manage their projects more efficiently using the Model Context Protocol (MCP). The tool allows users to define context models for their projects, facilitating communication and collaboration among team members. With MCP ACHS Dev, teams can share relevant information about the project, coordinate tasks, and maintain clear tracking of progress, improving productivity and management of complex projects."
    },
    fullDescription: {
      "es": "MCP ACHS Dev es una aplicación innovadora que utiliza el protocolo Model Context Protocol (MCP) para mejorar la gestión de proyectos de desarrollo. La herramienta permite a los equipos definir modelos de contexto que encapsulan información relevante sobre el proyecto, como objetivos, tareas, recursos y plazos. Esto facilita la comunicación entre los miembros del equipo, ya que todos tienen acceso a la misma información actualizada. Además, MCP ACHS Dev ofrece funcionalidades adicionales, como la integración con herramientas de gestión de proyectos populares y la capacidad de realizar consultas a bases de datos y servicios externos, lo que mejora aún más la eficiencia y la colaboración en proyectos complejos.",
      "en": "MCP ACHS Dev is an innovative application that utilizes the Model Context Protocol (MCP) to enhance development project management. The tool allows teams to define context models that encapsulate relevant information about the project, such as objectives, tasks, resources, and deadlines. This facilitates communication among team members, as everyone has access to the same updated information. Additionally, MCP ACHS Dev offers additional functionalities, such as integration with popular project management tools and the ability to perform queries to databases and external services, further improving efficiency and collaboration in complex projects."
    },
    features: {
      "es": [
        "Conexión con InterSystems IRIS para gestión de datos en tiempo real",
        "Proxy de Azure DevOps, donde se agregan funcionalizades a Azure Repos, Azure Wiki, Azure Pipelines y Azure Boards",
        "Conexión a base de datos SQL Server para realizar queries a la base de datos"
      ],
      "en": [
        "Connection with InterSystems IRIS for real-time data management",
        "Azure DevOps proxy, where functionalities are added to Azure Repos, Azure Wiki, Azure Pipelines, and Azure Boards",
        "Connection to SQL Server database to perform queries to the database"
      ],
    },
    challenges: {
      "es": [
        "Integración de múltiples herramientas y servicios para proporcionar una experiencia unificada",
        "Optimización del rendimiento para manejar grandes volúmenes de datos y consultas complejas",
        "Garantizar la seguridad y privacidad de los datos compartidos a través de la plataforma"
      ],
      "en": [
        "Integration of multiple tools and services to provide a unified experience",
        "Performance optimization to handle large volumes of data and complex queries",
        "Ensuring security and privacy of data shared through the platform"
      ],
    },
    githubUrl: "https://github.com/sorodriguezz/fc-devs-mcp",
    demoUrl: "https://www.npmjs.com/package/fc-devs-mcp",
    icon: "",
    color: "#BA3636"
  }
];
