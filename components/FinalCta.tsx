import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-final-titulo" className="bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <Reveal>
          <h2
            id="cta-final-titulo"
            className="display max-w-4xl text-[clamp(2.2rem,5.5vw,4.6rem)] text-paper uppercase"
          >
            A próxima <span className="text-blood">obra</span> é a sua.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projeto"
              className="rounded-full bg-paper px-8 py-4 text-center text-sm font-semibold text-ink transition-colors hover:bg-blood hover:text-paper"
            >
              Quero fazer uma tatuagem
            </a>
            <a
              href="#projeto"
              className="rounded-full border border-paper/30 px-8 py-4 text-center text-sm font-semibold text-paper transition-colors hover:border-paper"
            >
              Quero aplicar um piercing
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
