import { motion } from "framer-motion";
import { Video, Target, Lightbulb } from "lucide-react";

export function WhatIsSection() {
  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(42,85%,55%,0.03)_0%,_transparent_70%)]" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              // DEFINIÇÃO // METODOLOGIA // RESULTADOS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-8"
          >
            O Que É a Auditoria de{" "}
            <span className="text-primary">Automação?</span>
          </motion.h2>

          {/* Main description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Uma <span className="text-foreground font-semibold">sessão individual de 90 minutos</span> comigo, 
              via videochamada, onde vamos <span className="text-primary font-semibold">radiografar o seu negócio</span> e 
              criar um <span className="text-foreground font-semibold">plano de ação claro</span> para implementar 
              automações com IA — mesmo que nunca tenha usado tecnologia avançada antes.
            </p>
          </motion.div>

          {/* Visual cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Sessão ao Vivo</h3>
              <p className="text-sm text-muted-foreground">Via Zoom ou Google Meet, focada 100% no seu negócio</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Prática, Não Teoria</h3>
              <p className="text-sm text-muted-foreground">Focada nos SEUS processos, para resultados REAIS</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Sem Pré-requisitos</h3>
              <p className="text-sm text-muted-foreground">Mesmo que nunca tenha usado tecnologia avançada</p>
            </motion.div>
          </div>

          {/* Emphasis box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="p-6 rounded-2xl border-2 border-primary/30 bg-primary/5"
          >
            <p className="text-lg font-semibold text-center">
              <span className="text-primary">Isto não é teoria.</span> É uma sessão prática, focada no SEU negócio, 
              com os SEUS processos, para gerar resultados REAIS.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
