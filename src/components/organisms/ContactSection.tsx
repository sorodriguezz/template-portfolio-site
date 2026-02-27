"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SectionTitle, Button } from "@/components/atoms";
import { FormField } from "@/components/molecules";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();

  const projectTypeOptions = Object.entries(t.contact.tipoOptions).map(([value, label]) => ({
    value,
    label,
  }));

  return (
    <section id="contacto" className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle={t.contact.subtitle} title={t.contact.title} />

        <div className="mt-8 sm:mt-12 grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-text-secondary text-lg leading-relaxed">
              {t.contact.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono text-text-secondary uppercase tracking-widest block mb-1">
                    {t.contact.emailLabel}
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary hover:underline font-mono"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono text-text-secondary uppercase tracking-widest block mb-1">
                    {t.contact.ubicacionLabel}
                  </span>
                  <p className="text-text-primary">{t.contact.ubicacion}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-bg-card border border-border rounded-xl p-4 sm:p-6"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  label={t.contact.nombre}
                  name="name"
                  placeholder={t.contact.placeholderNombre}
                />
                <FormField
                  label={t.contact.email}
                  name="email"
                  type="email"
                  placeholder={t.contact.placeholderEmail}
                />
              </div>

              <FormField
                label={t.contact.tipoProyecto}
                name="projectType"
                type="select"
                options={projectTypeOptions}
              />

              <FormField
                label={t.contact.mensaje}
                name="message"
                type="textarea"
                placeholder={t.contact.placeholderMensaje}
              />

              <Button variant="primary" size="lg" className="w-full justify-center mt-4">
                {t.contact.enviar} <Send size={16} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
