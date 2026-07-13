import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { piercingBenefits } from "@/data/benefits";

export function PiercingSection() {
  return (
    <section
      id="piercing"
      aria-labelledby="piercing-titulo"
      className="bg-surface"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <Reveal>
          <p className="eyebrow">Aplicação de piercing</p>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal delay={0.06}>
              <h2
                id="piercing-titulo"
                className="display text-3xl text-ink uppercase md:text-4xl"
              >
                Aplicação segura, precisa e personalizada.
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-loose text-ink/60">
                Escolha do posicionamento, orientação sobre a joia e
                acompanhamento dos cuidados após a aplicação.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              {/* mobile: faixa curta; desktop: retrato 4/5 */}
              <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-3xl lg:aspect-[4/5] lg:max-w-sm">
                <Image
                  src="/images/piercing/aplicacao-perfil.jpg"
                  alt="Perfil com microdermal na maçã do rosto, piercing no nariz e argolas na orelha"
                  fill
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  className="object-cover object-[center_28%] lg:object-center"
                />
                <div aria-hidden className="grain absolute inset-0" />
              </div>
            </Reveal>
          </div>

          <ul className="lg:col-span-6 lg:col-start-7">
            {piercingBenefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={0.05 * i}>
                <li className="hairline flex items-baseline gap-5 py-4.5 first:border-t-0 lg:gap-6 lg:py-6">
                  <span className="museum-caption shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">
                      {benefit.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/55">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
