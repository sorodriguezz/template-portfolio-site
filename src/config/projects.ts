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
    image: "",
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
];
