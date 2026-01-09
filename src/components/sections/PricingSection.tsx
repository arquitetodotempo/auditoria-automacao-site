import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Check } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(42,85%,55%,0.05)_0%,_transparent_60%)]" />

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                // INVESTIMENTO // VALOR // RETORNO
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold"
            >
              O Seu{" "}
              <span className="text-primary">Investimento</span>
            </motion.h2>
          </div>

          {/* Pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="p-8 md:p-12 rounded-3xl bg-card border-2 border-primary/30 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative z-10">
                {/* Price */}
                <div className="text-center mb-8">
                  <div className="mb-4">
                    <span className="text-6xl md:text-8xl font-black text-foreground">€297</span>
                  </div>
                  <p className="text-lg text-muted-foreground">Pagamento Único</p>
                </div>

                {/* ROI Calculation */}
                <div className="p-4 md:p-6 rounded-2xl bg-secondary/50 mb-6 md:mb-8">
                  <p className="text-xs md:text-sm font-bold text-primary uppercase tracking-wider mb-3 md:mb-4 text-center">
                    O que isto representa:
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground text-center mb-4">
                    Se recuperar apenas 10h/semana e o seu tempo vale €30/hora, poupa:
                  </p>
                  <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
                    <div className="px-1">
                      <p className="text-xl md:text-3xl font-bold text-foreground">€300</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground mt-1">/semana</p>
                    </div>
                    <div className="px-1">
                      <p className="text-xl md:text-3xl font-bold text-foreground">€1.200</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground mt-1">/mês</p>
                    </div>
                    <div className="px-1">
                      <p className="text-xl md:text-3xl font-bold text-primary">€14.400</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground mt-1">/ano</p>
                    </div>
                  </div>
                </div>

                {/* ROI highlight */}
                <div className="text-center mb-8">
                  <p className="text-lg">
                    Retorno do investimento em{" "}
                    <span className="text-primary font-bold">menos de 1 semana</span>
                  </p>
                </div>

                {/* CTA */}
                <div className="text-center mb-8">
                  <Button asChild variant="cta" size="lg" className="w-full md:w-auto px-6 py-4 md:px-8 md:py-6 group">
                    <a href="https://cal.arquitetodotempo.com/agendamentos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-sm md:text-base">
                      Reservar Minha Auditoria
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                    </a>
                  </Button>
                </div>

                {/* Guarantee */}
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-success/10 border border-success/20">
                  <Shield className="w-6 h-6 text-success flex-shrink-0" />
                  <p className="text-sm">
                    <span className="font-bold text-success">Garantia de Resultados:</span>{" "}
                    <span className="text-muted-foreground">
                      100% devolvido se não identificar pelo menos 5h/semana de poupança
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scarcity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20">
              <span className="flex h-2 w-2 rounded-full bg-destructive animate-pulse" />
              <span className="text-sm font-medium text-destructive">
                10 vagas por semana
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
