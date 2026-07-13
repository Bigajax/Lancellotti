import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    numeral: "01",
    title: "Tatuagem",
    description:
      "Projetos personalizados, desenvolvidos a partir da sua ideia, estilo e referência.",
    cta: "Pedir orçamento",
  },
  {
    numeral: "02",
    title: "Piercing",
    description:
      "Aplicação profissional com orientação sobre escolha da joia, posicionamento e cuidados.",
    cta: "Agendar piercing",
  },
] as const;

/** Díptico tipográfico: tinta × papel, numeral gigante como textura; ambos → wizard. */
export function ServiceCards() {
  return (
    <section
      id="atendimento"
      aria-labelledby="atendimento-titulo"
      className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24"
    >
      <Reveal>
        <div className="hairline flex items-baseline justify-between pt-8">
          <h2
            id="atendimento-titulo"
            className="display text-3xl text-ink uppercase md:text-4xl"
          >
            Escolha seu atendimento
          </h2>
          <p className="museum-caption hidden sm:block">
            Duas frentes, uma assinatura
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {services.map((service, i) => {
          const dark = i === 0;
          return (
            <Reveal key={service.title} delay={0.08 * i}>
              <a
                href="#projeto"
                className={`group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-3xl p-8 md:min-h-[420px] md:p-10 ${
                  dark ? "bg-ink" : "border border-ink/10 bg-surface"
                }`}
              >
                {/* numeral gigante — textura tipográfica, meio pra fora do painel */}
                <span
                  aria-hidden
                  className={`display pointer-events-none absolute -top-10 -right-4 text-[11rem] leading-none select-none md:text-[15rem] ${
                    dark ? "text-paper/8" : "text-ink/6"
                  } transition-colors duration-500 ${
                    dark ? "group-hover:text-blood/25" : "group-hover:text-blood/15"
                  }`}
                >
                  {service.numeral}
                </span>

                <p
                  className={`display text-lg text-blood ${dark ? "brightness-150" : ""}`}
                >
                  {service.numeral}
                </p>
                <h3
                  className={`display mt-2 text-4xl uppercase md:text-5xl ${
                    dark ? "text-paper" : "text-ink"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-4 max-w-sm text-sm leading-relaxed ${
                    dark ? "text-paper/65" : "text-ink/60"
                  }`}
                >
                  {service.description}
                </p>
                <span
                  className={`mt-7 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${
                    dark
                      ? "bg-paper text-ink group-hover:bg-blood group-hover:text-paper"
                      : "bg-ink text-paper group-hover:bg-blood"
                  }`}
                >
                  {service.cta}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
