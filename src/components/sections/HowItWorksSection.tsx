import { motion } from "framer-motion";
import { CreditCard, Calendar, ClipboardCheck, Video, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CreditCard,
    title: "Reserve a Sua Vaga",
    description: "Clique no botão e faça o pagamento seguro.",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Agende a Sessão",
    description: "Recebe email com link para escolher data e horário (dentro de 7 dias).",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Prepare-se",
    description: "Preenche questionário rápido (5min) sobre o seu negócio.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Faça o Pagamento",
    description: "Só após o pagamento a marcação estará completa.",
  },
  {
    number: "05",
    icon: Video,
    title: "Sessão ao Vivo",
    description: "90 minutos focados em mapear, priorizar e criar o seu roadmap.",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Implemente",
    description: "Recebe materiais e começa a implementar com suporte por 15 dias.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 bg-card relative">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                // PROCESSO // PASSOS // JORNADA
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold"
            >
              Como{" "}
              <span className="text-primary">Funciona?</span>
            </motion.h2>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[27px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className={`flex gap-6 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                    <div className={`p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors ${index % 2 === 1 ? 'md:ml-auto' : ''} md:max-w-md`}>
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-primary">PASSO {step.number}</span>
                          <h3 className="text-lg font-bold">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Center dot - hidden on mobile */}
                  <div className="hidden md:flex w-14 flex-shrink-0 items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-card" />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
