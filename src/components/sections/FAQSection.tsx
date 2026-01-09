import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter conhecimentos técnicos?",
    answer: "Não. A auditoria é para quem quer começar do zero. Explico tudo em linguagem simples.",
  },
  {
    question: "Serve para o meu sector?",
    answer: "Sim. Já trabalhei com consultores, arquitetos, advogados, terapeutas, designers, contabilistas e muitos outros. Os princípios de automação aplicam-se a qualquer negócio.",
  },
  {
    question: "E se eu já usar alguma IA?",
    answer: "Perfeito. Vamos otimizar o que já faz e descobrir novas oportunidades que talvez não tenha visto.",
  },
  {
    question: "Quanto tempo leva a implementar?",
    answer: "Depende da complexidade, mas normalmente as primeiras automações estão a funcionar em 48-72 horas.",
  },
  {
    question: "Posso fazer mais de uma auditoria?",
    answer: "Claro! Alguns clientes fazem auditorias trimestrais para continuar a otimizar.",
  },
  {
    question: "A gravação fica disponível quanto tempo?",
    answer: "Para sempre. Acesso vitalício.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                // PERGUNTAS // RESPOSTAS // CLAREZA
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold"
            >
              Perguntas{" "}
              <span className="text-primary">Frequentes</span>
            </motion.h2>
          </div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-card transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
