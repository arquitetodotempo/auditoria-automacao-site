import { motion } from "framer-motion";
import { Sparkles, Clock, TrendingUp } from "lucide-react";
import mentorPhoto from "@/assets/jose-luis-paulino.png";

const teachings = [
  { icon: Sparkles, text: "Automatizar processos sem precisar ser expert em tecnologia" },
  { icon: Clock, text: "Ganhar tempo para focar no que realmente importa" },
  { icon: TrendingUp, text: "Aumentar receita sem trabalhar mais horas" },
];

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left - Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-secondary to-muted overflow-hidden border border-border">
                  <img 
                    src={mentorPhoto} 
                    alt="José Luis Paulino - Mentor e Professor" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary/10 -z-10" />
              </div>
            </motion.div>

            {/* Right - Content */}
            <div className="lg:col-span-3">
              {/* Section label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                  // MENTOR // EXPERIÊNCIA // MISSÃO
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
                Quem Sou{" "}
                <span className="text-primary">Eu?</span>
              </motion.h2>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="space-y-4 text-muted-foreground mb-8"
              >
                <p className="text-lg">
                  Sou <span className="text-foreground font-semibold">José Luis Paulino</span>, 
                  professor e mentor com mais de <span className="text-primary font-semibold">30 anos de experiência</span> no 
                  mundo corporativo e empreendedor.
                </p>
                <p>
                  Vivi na pele a sobrecarga, a correria, a sensação de "não ter tempo para nada". 
                  Descobri que a IA pode ser uma aliada poderosa — quando usada de forma estratégica e prática.
                </p>
                <p>Hoje ensino profissionais como você a:</p>
              </motion.div>

              {/* Teachings */}
              <div className="space-y-4 mb-8">
                {teachings.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
                  >
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-2xl bg-primary/5 border border-primary/20"
              >
                <p className="font-semibold">
                  <span className="text-primary">A minha missão:</span> Transformar complexidade em simplicidade. 
                  Tecnologia em leveza. Sobrecarga em tempo livre.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
