import { motion } from "framer-motion";
import { FileCheck, Rocket, MessageCircle, Gift } from "lucide-react";

const bonuses = [
  {
    number: "#1",
    icon: FileCheck,
    title: "Checklist \"Mapeamento Rápido\"",
    description: "PDF com framework para identificar processos automatizáveis no seu negócio",
    value: "€27",
  },
  {
    number: "#2",
    icon: Rocket,
    title: "Acesso Antecipado",
    description: "Quando lançar produtos futuros, terá acesso prioritário com desconto especial",
    value: "Exclusivo",
  },
  {
    number: "#3",
    icon: MessageCircle,
    title: "Suporte Pós-Auditoria",
    description: "15 dias de suporte por email para tirar dúvidas na implementação",
    value: "Incluído",
  },
];

export function BonusSection() {
  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Gift className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">BÓNUS EXCLUSIVOS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold"
            >
              Além da Auditoria,{" "}
              <span className="text-primary">Recebe Ainda</span>
            </motion.h2>
          </div>

          {/* Bonus cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="relative group"
              >
                <div className="h-full p-6 rounded-2xl bg-background border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                  {/* Badge */}
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      Bónus {bonus.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mt-4 mb-4 group-hover:bg-primary/20 transition-colors">
                    <bonus.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {bonus.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {bonus.description}
                  </p>

                  {/* Value */}
                  <div className="pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">Valor: </span>
                    <span className="text-primary font-bold">{bonus.value}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
