import { motion } from "framer-motion";
import { Check } from "lucide-react";

const painPoints = [
  "Passa horas em tarefas repetitivas que poderiam ser automatizadas",
  "Sente que está a ficar para trás enquanto outros usam IA",
  "Quer começar a usar IA mas não sabe por onde",
  "Tem processos manuais que consomem tempo precioso",
  "Quer aumentar receita sem aumentar horas de trabalho",
];

export function TargetAudienceSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              // QUALIFICAÇÃO // PERFIL // ALINHAMENTO
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
            Para Quem É Esta{" "}
            <span className="text-primary">Auditoria?</span>
          </motion.h2>

          {/* Intro text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg text-muted-foreground mb-12"
          >
            Se é <span className="text-foreground font-semibold">profissional liberal</span> ou{" "}
            <span className="text-foreground font-semibold">dono de pequena empresa</span> e...
          </motion.p>

          {/* Pain points */}
          <div className="space-y-4 mb-12">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-success" />
                </div>
                <p className="text-foreground">{point}</p>
              </motion.div>
            ))}
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20"
          >
            <p className="text-xl font-semibold text-center">
              Esta auditoria foi desenhada <span className="text-primary">para si</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
