import { motion } from "framer-motion";
import { Video, Search, Map, MessageSquare, Film } from "lucide-react";

const deliverables = [
  {
    number: "01",
    icon: Video,
    title: "Sessão de 90 Minutos ao Vivo",
    description: "Conversa privada via Zoom ou Google Meet, focada 100% no seu negócio.",
  },
  {
    number: "02",
    icon: Search,
    title: "Diagnóstico Completo",
    description: "Identifico 3 a 5 processos no seu negócio que podem ser automatizados com IA para libertar tempo e aumentar eficiência.",
  },
  {
    number: "03",
    icon: Map,
    title: "Roadmap Priorizado",
    description: "Recebe um plano de ação passo-a-passo, ordenado por impacto e facilidade de implementação. Sabe exatamente o que fazer primeiro.",
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Biblioteca de Prompts Personalizada",
    description: "Crio 5 a 10 prompts customizados para o seu sector e necessidades específicas — prontos para copiar e usar.",
  },
  {
    number: "05",
    icon: Film,
    title: "Gravação da Sessão",
    description: "Acesso permanente à gravação para rever sempre que precisar.",
  },
];

export function IncludedSection() {
  return (
    <section id="included" className="py-24 md:py-32 bg-background relative">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              // ENTREGÁVEIS // VALOR // TRANSFORMAÇÃO
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-16"
          >
            O Que Está{" "}
            <span className="text-primary">Incluído?</span>
          </motion.h2>

          {/* Deliverables list */}
          <div className="space-y-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="group flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
              >
                {/* Number */}
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-2xl bg-secondary items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{item.number}</span>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
