import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, CreditCard } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsla(42,85%,55%,0.1)_0%,_transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Pronto Para Recuperar o{" "}
            <span className="text-primary">Seu Tempo?</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Cada dia que passa sem automatizar é um dia de tempo perdido que nunca volta.
          </motion.p>

          {/* Decision box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
          >
            <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
              <p className="text-destructive font-semibold mb-2">❌ Sem a Auditoria</p>
              <p className="text-sm text-muted-foreground">
                Continuar sobrecarregado, a fazer tudo manualmente, com a sensação de estar sempre a correr atrás do tempo...
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-success/5 border border-success/20">
              <p className="text-success font-semibold mb-2">✅ Com a Auditoria</p>
              <p className="text-sm text-muted-foreground">
                Investir 90 minutos para criar um plano claro que vai libertar 10h/semana, todas as semanas, durante anos.
              </p>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 max-w-xl mx-auto"
          >
            <div className="mb-6">
              <span className="text-5xl font-black text-foreground">€297</span>
              <span className="text-muted-foreground ml-2">Pagamento único</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-success" />
                Garantia 100%
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-4 h-4 text-primary" />
                Pagamento Seguro
              </span>
            </div>

            <Button asChild variant="cta" size="lg" className="w-full px-6 py-4 md:px-8 md:py-6 group mb-4">
              <a href="https://cal.arquitetodotempo.com/agendamentos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 w-full justify-center text-sm md:text-base">
                Garantir Minha Vaga Agora
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </a>
            </Button>

            <p className="text-xs text-muted-foreground">
              🔒 Cartão, MB Way ou Transferência • Encriptação SSL
            </p>
          </motion.div>

          {/* Scarcity reminder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20">
              <span className="flex h-2 w-2 rounded-full bg-destructive animate-pulse" />
              <span className="text-sm font-medium text-destructive">
                Apenas 10 vagas disponíveis esta semana
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
