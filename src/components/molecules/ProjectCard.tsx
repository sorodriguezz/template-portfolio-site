"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/atoms";
import { type ProjectData } from "@/types";
import { type Language } from "@/config/translations";
import { Github, ExternalLink, Eye } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  language: Language;
  onViewDetails: (project: ProjectData) => void;
  labels: {
    verDetalles: string;
    verRepo: string;
    arquitectura: string;
    ultimaActualizacion: string;
  };
}

export function ProjectCard({
  project,
  index,
  language,
  onViewDetails,
  labels,
}: ProjectCardProps) {
  const statusLabels: Record<string, string> = {
    deployed: language === "es" ? "DESPLEGADO" : "DEPLOYED",
    stable: language === "es" ? "ESTABLE" : "STABLE",
    legacy: "LEGACY",
    development: language === "es" ? "EN DESARROLLO" : "IN DEV",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group bg-bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,229,255,0.1)] card-shine"
    >
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden bg-linear-to-br from-bg-card to-bg-dark">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${project.color}40, transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              width={800}
              height={500}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <span className="text-6xl">{project.icon}</span>
          )}
          {/* <span className="text-6xl">{project.icon}</span> */}
        </div>
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <Badge
            text={statusLabels[project.status]}
            variant="status"
            status={project.status}
          />
        </div>
        {/* Version Badge */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-mono text-text-secondary bg-bg-dark/80 px-2 py-1 rounded">
            {project.version}
          </span>
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onViewDetails(project)}
            className="bg-primary text-bg-dark p-3 rounded-full cursor-pointer"
          >
            <Eye size={20} />
          </motion.button>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/10 text-white p-3 rounded-full border border-white/20"
          >
            <Github size={20} />
          </motion.a>
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/10 text-white p-3 rounded-full border border-white/20"
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-xs font-mono text-text-secondary mt-0.5">
              {project.architecture[language]} ·{" "}
              {project.architectureDetail[language]}
            </p>
          </div>
        </div>

        <p className="text-sm text-text-secondary mb-4 line-clamp-2">
          {project.description[language]}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-xs text-text-secondary font-mono">
            {project.lastUpdate[language]}
          </span>
          <button
            onClick={() => onViewDetails(project)}
            className="text-xs font-mono text-primary hover:text-primary-dark transition-colors cursor-pointer flex items-center gap-1"
          >
            {labels.verDetalles} →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
