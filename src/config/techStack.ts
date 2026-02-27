import { type TechCategory } from "@/types";

export const techStackData: TechCategory[] = [
  {
    id: "frontend",
    icon: "Monitor",
    color: "#00e5ff",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "Vue 3", level: 85 },
      { name: "TypeScript", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Three.js", level: 70 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    id: "backend",
    icon: "Server",
    color: "#ff4081",
    items: [
      { name: "Node.js", level: 95 },
      { name: "Python / Django", level: 90 },
      { name: "Go Lang", level: 80 },
      { name: "GraphQL", level: 85 },
      { name: "NestJS", level: 90 },
      { name: "Spring Boot", level: 75 },
    ],
  },
  {
    id: "devops",
    icon: "Cloud",
    color: "#00e676",
    items: [
      { name: "AWS / Azure", level: 90 },
      { name: "Docker / K8s", level: 95 },
      { name: "CI/CD Pipelines", level: 90 },
      { name: "Terraform", level: 85 },
      { name: "GitHub Actions", level: 90 },
      { name: "Ansible", level: 75 },
    ],
  },
  {
    id: "architecture",
    icon: "Triangle",
    color: "#7c4dff",
    items: [
      { name: "Microservicios", level: 95 },
      { name: "Event-Driven", level: 90 },
      { name: "System Design", level: 95 },
      { name: "Domain-Driven Design", level: 90 },
      { name: "CQRS / Event Sourcing", level: 85 },
      { name: "Clean Architecture", level: 95 },
    ],
  },
  {
    id: "databases",
    icon: "Database",
    color: "#ffab00",
    items: [
      { name: "PostgreSQL", level: 95 },
      { name: "MongoDB", level: 90 },
      { name: "Redis", level: 90 },
      { name: "Elasticsearch", level: 80 },
      { name: "Apache Kafka", level: 85 },
      { name: "DynamoDB", level: 80 },
    ],
  },
  {
    id: "tools",
    icon: "Wrench",
    color: "#ff6b6b",
    items: [
      { name: "Git / GitHub", level: 95 },
      { name: "Jira / Confluence", level: 85 },
      { name: "Figma", level: 70 },
      { name: "Postman / Insomnia", level: 90 },
      { name: "DataDog / Grafana", level: 85 },
      { name: "SonarQube", level: 80 },
    ],
  },
];
