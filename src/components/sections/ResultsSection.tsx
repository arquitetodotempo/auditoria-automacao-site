import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";

const results = [
  "Clareza total sobre onde está a perder tempo",
  "Roadmap personalizado de automações prioritárias",
  "Prompts prontos para começar a usar IA hoje mesmo",
  "Plano de ação para implementar nos próximos 30 dias",
  "Estimativa realista de tempo e dinheiro que vai poupar",
];

export function ResultsSection() {
  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsla(42,85%,55%,0.05)_0%,_transparent_50%)]" />

      <div className="container px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - content */}
            <div>
              {/* Section label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                  // RESULTADOS // IMPACTO // TRANSFORMAÇÃO
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Resultado{" "}
                <span className="text-primary">Esperado</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-lg text-muted-foreground mb-8"
              >
                No final da auditoria, terá:
              </motion.p>

              {/* Results list */}
              <div className="space-y-4">
                {results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-foreground font-medium">{result}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side - Big stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center relative overflow-hidden">
                {/* Decorative circle */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
                
                <div className="relative z-10">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
                  <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">
                    Meta
                  </p>
                  <div className="mb-6">
                    <span className="text-6xl md:text-8xl font-black text-foreground">10</span>
                    <span className="text-2xl md:text-3xl font-bold text-primary ml-2">h</span>
                  </div>
                  <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    por semana
                  </p>
                  <p className="text-muted-foreground">
                    recuperadas após implementação
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
