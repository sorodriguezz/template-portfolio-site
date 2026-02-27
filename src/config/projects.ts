import { type ProjectData } from "@/types";

export const projectsData: ProjectData[] = [
  {
    id: "neural-ledger",
    name: "Neural Ledger",
    version: "v4.2.1-stable",
    architecture: {
      es: "Registro Distribuido",
      en: "Distributed Ledger",
    },
    architectureDetail: {
      es: "Prueba de conocimiento cero",
      en: "Zero-knowledge proof",
    },
    techStack: ["Rust", "Solidity", "Web3"],
    status: "deployed",
    lastUpdate: {
      es: "Hace 2 horas",
      en: "2 hours ago",
    },
    image: "/projects/neural-ledger.jpg",
    description: {
      es: "Plataforma de registro distribuido con pruebas de conocimiento cero para transacciones seguras y escalables en blockchain.",
      en: "Distributed ledger platform with zero-knowledge proofs for secure and scalable blockchain transactions.",
    },
    fullDescription: {
      es: "Neural Ledger es una plataforma de registro distribuido de última generación que implementa pruebas de conocimiento cero (ZKP) para garantizar la privacidad y seguridad de las transacciones. Diseñada para manejar miles de transacciones por segundo, utiliza una arquitectura de consenso innovadora que combina Proof of Stake con verificación ZKP, logrando un balance óptimo entre descentralización, seguridad y rendimiento.",
      en: "Neural Ledger is a cutting-edge distributed ledger platform implementing zero-knowledge proofs (ZKP) to ensure transaction privacy and security. Designed to handle thousands of transactions per second, it uses an innovative consensus architecture combining Proof of Stake with ZKP verification, achieving an optimal balance between decentralization, security, and performance.",
    },
    features: {
      es: [
        "Pruebas de conocimiento cero para privacidad total",
        "Consenso híbrido PoS + ZKP",
        "Smart contracts en Solidity optimizados",
        "API REST y WebSocket para integración",
        "Dashboard de monitoreo en tiempo real",
      ],
      en: [
        "Zero-knowledge proofs for total privacy",
        "Hybrid PoS + ZKP consensus",
        "Optimized Solidity smart contracts",
        "REST API and WebSocket for integration",
        "Real-time monitoring dashboard",
      ],
    },
    challenges: {
      es: [
        "Optimización de generación de pruebas ZKP para reducir latencia",
        "Implementación de sharding para escalabilidad horizontal",
        "Diseño de mecanismo de recuperación ante fallos bizantinos",
      ],
      en: [
        "Optimization of ZKP proof generation to reduce latency",
        "Sharding implementation for horizontal scalability",
        "Design of Byzantine fault tolerance recovery mechanism",
      ],
    },
    githubUrl: "https://github.com/usuario/neural-ledger",
    demoUrl: "https://neural-ledger-demo.vercel.app",
    icon: "🔗",
    color: "#ff6b6b",
  },
  {
    id: "vertex-analytics",
    name: "Vertex Analytics",
    version: "v2.1.0-beta",
    architecture: {
      es: "Pipeline en Tiempo Real",
      en: "Real-time Pipeline",
    },
    architectureDetail: {
      es: "Procesamiento a escala de terabytes",
      en: "Terabyte-scale processing",
    },
    techStack: ["Python", "Go", "TensorFlow"],
    status: "stable",
    lastUpdate: {
      es: "Hace 1 día",
      en: "1 day ago",
    },
    image: "/projects/vertex-analytics.jpg",
    description: {
      es: "Motor de analítica en tiempo real con pipeline de procesamiento de datos a escala de terabytes usando ML avanzado.",
      en: "Real-time analytics engine with terabyte-scale data processing pipeline using advanced ML.",
    },
    fullDescription: {
      es: "Vertex Analytics es un motor de procesamiento analítico en tiempo real capaz de manejar flujos de datos a escala de terabytes. Utiliza modelos de machine learning para detectar patrones, anomalías y generar predicciones en tiempo real. La arquitectura se basa en un pipeline de procesamiento distribuido con Apache Kafka para ingesta de datos y Apache Spark para procesamiento por lotes y streaming.",
      en: "Vertex Analytics is a real-time analytical processing engine capable of handling terabyte-scale data streams. It uses machine learning models to detect patterns, anomalies, and generate real-time predictions. The architecture is based on a distributed processing pipeline with Apache Kafka for data ingestion and Apache Spark for batch and stream processing.",
    },
    features: {
      es: [
        "Procesamiento de streaming con latencia < 100ms",
        "Modelos ML para detección de anomalías",
        "Visualización de datos en tiempo real",
        "Auto-escalado basado en carga de trabajo",
        "SDK para integración con aplicaciones externas",
      ],
      en: [
        "Stream processing with < 100ms latency",
        "ML models for anomaly detection",
        "Real-time data visualization",
        "Auto-scaling based on workload",
        "SDK for external application integration",
      ],
    },
    challenges: {
      es: [
        "Garantizar exactamente una vez (exactly-once) en procesamiento distribuido",
        "Optimización de modelos ML para inferencia en tiempo real",
        "Gestión de backpressure en pipelines de alto throughput",
      ],
      en: [
        "Ensuring exactly-once processing in distributed systems",
        "ML model optimization for real-time inference",
        "Backpressure management in high-throughput pipelines",
      ],
    },
    githubUrl: "https://github.com/usuario/vertex-analytics",
    demoUrl: "https://vertex-analytics-demo.vercel.app",
    icon: "📊",
    color: "#4ecdc4",
  },
  {
    id: "skynet-mesh",
    name: "SkyNet Mesh",
    version: "v3.8.5-release",
    architecture: {
      es: "Service Mesh",
      en: "Service Mesh",
    },
    architectureDetail: {
      es: "Kubernetes nativo",
      en: "Kubernetes native",
    },
    techStack: ["Go", "K8s", "gRPC"],
    status: "stable",
    lastUpdate: {
      es: "Hace 5 días",
      en: "5 days ago",
    },
    image: "/projects/skynet-mesh.jpg",
    description: {
      es: "Service mesh nativo de Kubernetes para gestión de tráfico, observabilidad y seguridad en arquitecturas de microservicios.",
      en: "Kubernetes-native service mesh for traffic management, observability, and security in microservices architectures.",
    },
    fullDescription: {
      es: "SkyNet Mesh es una solución de service mesh diseñada desde cero para entornos Kubernetes. Proporciona gestión avanzada de tráfico, observabilidad completa y seguridad mTLS automática entre microservicios. Con un plano de control ligero escrito en Go y sidecars de alto rendimiento que utilizan gRPC, SkyNet Mesh ofrece una sobrecarga mínima mientras proporciona capacidades empresariales.",
      en: "SkyNet Mesh is a service mesh solution designed from scratch for Kubernetes environments. It provides advanced traffic management, complete observability, and automatic mTLS security between microservices. With a lightweight control plane written in Go and high-performance sidecars using gRPC, SkyNet Mesh offers minimal overhead while providing enterprise capabilities.",
    },
    features: {
      es: [
        "mTLS automático entre servicios",
        "Balanceo de carga inteligente con circuit breaker",
        "Distributed tracing integrado",
        "Canary deployments y A/B testing",
        "Dashboard de control unificado",
      ],
      en: [
        "Automatic mTLS between services",
        "Intelligent load balancing with circuit breaker",
        "Integrated distributed tracing",
        "Canary deployments and A/B testing",
        "Unified control dashboard",
      ],
    },
    challenges: {
      es: [
        "Minimizar la latencia del sidecar proxy a < 1ms",
        "Implementar hot-reload de configuración sin downtime",
        "Sincronización del estado del mesh en clústeres multi-región",
      ],
      en: [
        "Minimizing sidecar proxy latency to < 1ms",
        "Implementing configuration hot-reload without downtime",
        "Mesh state synchronization in multi-region clusters",
      ],
    },
    githubUrl: "https://github.com/usuario/skynet-mesh",
    icon: "🌐",
    color: "#45b7d1",
  },
  {
    id: "cipher-vault",
    name: "Cipher Vault",
    version: "v6.0.1-legacy",
    architecture: {
      es: "API de Encriptación",
      en: "Encryption API",
    },
    architectureDetail: {
      es: "Estándar AES-256",
      en: "AES-256 standard",
    },
    techStack: ["Node.js", "OpenSSL"],
    status: "legacy",
    lastUpdate: {
      es: "Hace 2 años",
      en: "2 years ago",
    },
    image: "/projects/cipher-vault.jpg",
    description: {
      es: "API de encriptación empresarial con gestión de claves HSM y cumplimiento de estándares FIPS 140-2.",
      en: "Enterprise encryption API with HSM key management and FIPS 140-2 compliance.",
    },
    fullDescription: {
      es: "Cipher Vault es una API de encriptación de nivel empresarial que proporciona servicios criptográficos robustos con gestión de claves a través de módulos de seguridad de hardware (HSM). Cumple con los estándares FIPS 140-2 y ofrece encriptación AES-256, firma digital RSA, y gestión completa del ciclo de vida de claves criptográficas.",
      en: "Cipher Vault is an enterprise-grade encryption API providing robust cryptographic services with key management through Hardware Security Modules (HSM). It complies with FIPS 140-2 standards and offers AES-256 encryption, RSA digital signing, and complete cryptographic key lifecycle management.",
    },
    features: {
      es: [
        "Encriptación AES-256-GCM de alto rendimiento",
        "Gestión de claves con HSM",
        "Rotación automática de claves",
        "Auditoría completa de operaciones criptográficas",
        "SDK para múltiples lenguajes",
      ],
      en: [
        "High-performance AES-256-GCM encryption",
        "HSM key management",
        "Automatic key rotation",
        "Complete cryptographic operations auditing",
        "Multi-language SDK",
      ],
    },
    challenges: {
      es: [
        "Optimización de throughput criptográfico para alta concurrencia",
        "Implementación de key escrow seguro",
        "Migración de claves entre proveedores HSM",
      ],
      en: [
        "Cryptographic throughput optimization for high concurrency",
        "Secure key escrow implementation",
        "Key migration between HSM providers",
      ],
    },
    githubUrl: "https://github.com/usuario/cipher-vault",
    icon: "🔐",
    color: "#96ceb4",
  },
  {
    id: "biosynthe-7",
    name: "BioSynthe 7",
    version: "v5.0-alpha",
    architecture: {
      es: "Algoritmo Genético",
      en: "Genetic Algorithm",
    },
    architectureDetail: {
      es: "Simulación evolutiva",
      en: "Evolutionary simulation",
    },
    techStack: ["Python", "NumPy"],
    status: "deployed",
    lastUpdate: {
      es: "Ahora mismo",
      en: "Just now",
    },
    image: "/projects/biosynthe.jpg",
    description: {
      es: "Framework de algoritmos genéticos para simulación y optimización evolutiva con visualización 3D interactiva.",
      en: "Genetic algorithms framework for evolutionary simulation and optimization with interactive 3D visualization.",
    },
    fullDescription: {
      es: "BioSynthe 7 es un framework avanzado de algoritmos genéticos diseñado para resolver problemas de optimización complejos mediante simulación evolutiva. Incorpora técnicas de computación evolutiva de última generación, incluyendo algoritmos meméticos, coevolución y optimización multi-objetivo. La visualización 3D interactiva permite observar la evolución de las poblaciones en tiempo real.",
      en: "BioSynthe 7 is an advanced genetic algorithms framework designed to solve complex optimization problems through evolutionary simulation. It incorporates cutting-edge evolutionary computing techniques, including memetic algorithms, coevolution, and multi-objective optimization. The interactive 3D visualization allows observing population evolution in real-time.",
    },
    features: {
      es: [
        "Algoritmos genéticos multi-objetivo (NSGA-II, MOEA/D)",
        "Visualización 3D con WebGL",
        "Paralelización con pool de procesos",
        "Operadores genéticos personalizables",
        "Exportación de resultados en múltiples formatos",
      ],
      en: [
        "Multi-objective genetic algorithms (NSGA-II, MOEA/D)",
        "3D visualization with WebGL",
        "Parallelization with process pool",
        "Customizable genetic operators",
        "Results export in multiple formats",
      ],
    },
    challenges: {
      es: [
        "Balancear exploración vs explotación en espacios de búsqueda grandes",
        "Implementar representación genómica eficiente en memoria",
        "Renderizado 3D de poblaciones con miles de individuos",
      ],
      en: [
        "Balancing exploration vs exploitation in large search spaces",
        "Implementing memory-efficient genomic representation",
        "3D rendering of populations with thousands of individuals",
      ],
    },
    githubUrl: "https://github.com/usuario/biosynthe-7",
    demoUrl: "https://biosynthe-demo.vercel.app",
    icon: "🧬",
    color: "#feca57",
  },
];
