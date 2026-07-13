import { Hero } from "@/components/Hero";
import { ObrasShowcase } from "@/components/ObrasShowcase";
import { ServiceCards } from "@/components/ServiceCards";
import { PortfolioTabs } from "@/components/PortfolioTabs";
import { PiercingSection } from "@/components/PiercingSection";
import { ProjetoForm } from "@/components/ProjetoForm";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { ComingSoonStrip } from "@/components/ComingSoonStrip";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      {/* ===== HERO CINEMATOGRÁFICO ===== */}
      <Hero />

      {/* ===== OBRAS — coleção selecionada ===== */}
      <ObrasShowcase />

      {/* ===== ARQUIVO — acervo completo com abas e filtros ===== */}
      <section
        id="arquivo"
        aria-labelledby="arquivo-titulo"
        className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24"
      >
        <Reveal>
          <div className="hairline flex items-baseline justify-between pt-8">
            <h2
              id="arquivo-titulo"
              className="display text-3xl text-ink uppercase md:text-4xl"
            >
              Arquivo
            </h2>
            <p className="museum-caption">Acervo do estúdio</p>
          </div>
        </Reveal>
        <div className="mt-12">
          <PortfolioTabs />
        </div>
      </section>

      {/* ===== ESCOLHA SEU ATENDIMENTO ===== */}
      <ServiceCards />

      {/* ===== APLICAÇÃO DE PIERCING ===== */}
      <PiercingSection />

      {/* ===== INICIAR UM PROJETO — wizard ===== */}
      <ProjetoForm />

      {/* ===== FAQ ===== */}
      <section
        id="faq"
        aria-labelledby="faq-titulo"
        className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24"
      >
        <Reveal>
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2
            id="faq-titulo"
            className="display mt-6 text-3xl text-ink uppercase md:text-4xl"
          >
            Antes da sua aplicação.
          </h2>
        </Reveal>
        <div className="mt-12">
          <Faq />
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <FinalCta />

      {/* ===== EM BREVE ===== */}
      <ComingSoonStrip />
    </>
  );
}
