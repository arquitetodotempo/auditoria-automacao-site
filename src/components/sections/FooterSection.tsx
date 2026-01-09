import { motion } from "framer-motion";

export function FooterSection() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Closing message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-muted-foreground italic mb-4">
              "Ter sorte dá muito trabalho. Mas ter um plano poupa muito tempo."
            </p>
            <p className="text-foreground font-semibold">
              Vemo-nos na auditoria,
            </p>
            <p className="text-primary font-bold text-lg mt-2">
              José Luis Paulino
            </p>
            <p className="text-sm text-muted-foreground">
              Mentor | Arquiteto do Tempo
            </p>
          </motion.div>

          {/* PS message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl bg-secondary/50 border border-border text-center mb-8"
          >
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">P.S.</span> — Lembre-se: apenas 10 vagas esta semana.
              Quando acabarem, a próxima oportunidade é só na semana seguinte.
            </p>
          </motion.div>

          {/* Copyright */}
          <div className="text-center">
            <div className="mb-3">
              <a href="/termos-uso.html" className="text-xs text-muted-foreground hover:text-primary hover:underline mx-2">
                Termos de Uso
              </a>
              <a href="/politica-privacidade.html" className="text-xs text-muted-foreground hover:text-primary hover:underline mx-2">
                Política de Privacidade
              </a>
              <a href="/politica-cookies.html" className="text-xs text-muted-foreground hover:text-primary hover:underline mx-2">
                Política de Cookies
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); (window as any).CookieConsent?.showPreferences(); }}
                className="text-xs text-muted-foreground hover:text-primary hover:underline mx-2"
              >
                🍪 Gerir Cookies
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2026 Arquiteto do Tempo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
