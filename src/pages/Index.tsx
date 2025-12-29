import { Confetti } from "@/components/Confetti";
import { StepCard } from "@/components/StepCard";
import { TimelineStep } from "@/components/TimelineStep";
import { Mail, ShieldCheck, Users, Play, Zap, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Confetti />
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="relative z-10 container max-w-3xl mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <header className="text-center mb-12 opacity-0 animate-scale-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6 animate-bounce-subtle">
            <span className="text-2xl">🎉</span>
            <span className="font-semibold text-sm uppercase tracking-wide">Inscrição Confirmada</span>
            <span className="text-2xl">🎉</span>
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Parabéns! Sua Inscrição no{" "}
            <span className="text-gradient">Curso Rápido de Cajón</span>{" "}
            Está Confirmada!
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Você acaba de dar o primeiro passo para se tornar um percussionista confiante em apenas{" "}
            <strong className="text-foreground">30 dias</strong>. Prepare-se para transformar sua forma de tocar cajón de vez!
          </p>
        </header>

        {/* Step 1 Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="w-10 h-10 rounded-full gradient-warm flex items-center justify-center text-primary-foreground font-display font-bold shadow-warm">
              1
            </div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
              O Que Acontece Agora
            </h2>
          </div>

          <div className="space-y-4">
            <StepCard
              icon={<Mail className="w-5 h-5" />}
              title="Acesso imediato ao curso"
              description="Você já pode começar! Em alguns segundos, você receberá um email com seu login e senha para acessar todos os módulos."
              delay={300}
            />
            <StepCard
              icon={<ShieldCheck className="w-5 h-5" />}
              title="Confirmação de pagamento"
              description="Seu investimento de R$147,00 foi confirmado com sucesso e sua garantia de 15 dias está ativa."
              delay={400}
            />
            <StepCard
              icon={<Users className="w-5 h-5" />}
              title="Convite para a comunidade VIP"
              description="Dentro do email você encontrará o link exclusivo para o grupo do WhatsApp. Ali você poderá tirar dúvidas, interagir com outros alunos e receber feedback rápido."
              delay={500}
            />
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-8 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <a
              href="https://chat.whatsapp.com/Cc1cgjPbM1QEsiWp85Q70f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-whatsapp text-accent-foreground rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse-glow"
            >
              <MessageCircle className="w-6 h-6" />
              Entrar no Grupo VIP WhatsApp
            </a>
          </div>
        </section>

        {/* Step 2 Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "700ms" }}>
            <div className="w-10 h-10 rounded-full gradient-warm flex items-center justify-center text-primary-foreground font-display font-bold shadow-warm">
              2
            </div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
              Próximos Passos
            </h2>
          </div>

          <div className="space-y-0">
            <TimelineStep
              day="Dia 1"
              title="Seu primeiro ritmo"
              icon={<Play className="w-3 h-3 text-primary-foreground" />}
              items={[
                "Assista à primeira aula de 10-15 minutos",
                "Aprenda postura, golpes básicos e timing"
              ]}
              delay={800}
            />
            <TimelineStep
              day="Dia 2-7"
              title="Fixando a técnica"
              icon={<Zap className="w-3 h-3 text-primary-foreground" />}
              items={[
                "Siga os exercícios do módulo de vídeo",
                "Receba dicas diárias no email para acelerar seu aprendizado",
                "Participe da comunidade para feedback e motivação"
              ]}
              delay={900}
            />
          </div>
        </section>

        {/* Important Note */}
        <div 
          className="rounded-2xl p-6 md:p-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 text-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1000ms" }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full gradient-celebration mb-4 shadow-glow">
            <span className="text-2xl">🥁</span>
          </div>
          <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">
            Importante
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Dedique ao menos <strong className="text-foreground">10-15 minutos por dia</strong> e siga o método passo a passo. 
            Você verá <strong className="text-foreground">resultados reais</strong> rapidamente!
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: "1100ms" }}>
          <p className="text-sm text-muted-foreground">
            Dúvidas? Entre em contato pelo WhatsApp ou responda ao email de boas-vindas.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
