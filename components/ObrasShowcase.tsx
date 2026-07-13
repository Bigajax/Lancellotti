import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { obras } from "@/data/portfolio";

/**
 * Vitrine de coleção: cada obra ocupa a cena sozinha, com legenda de galeria.
 * Layout alternado, imagens grandes, nenhum card.
 */
export function ObrasShowcase() {
  return (
    <section
      id="obras"
      aria-labelledby="obras-titulo"
      className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24"
    >
      <Reveal>
        <div className="hairline flex items-baseline justify-between pt-8">
          <h2
            id="obras-titulo"
            className="display text-3xl text-ink uppercase md:text-4xl"
          >
            Obras
          </h2>
          <p className="museum-caption">Seleção — {obras.length} peças</p>
        </div>
      </Reveal>

      <div className="mt-12 space-y-14 md:space-y-20">
        {obras.map((obra, index) => {
          const invert = index % 2 === 1;
          return (
            <Reveal key={obra.id}>
              <figure className="grid items-end gap-6 md:grid-cols-12">
                <div
                  className={`relative overflow-hidden rounded-3xl md:col-span-8 ${
                    invert ? "md:order-2 md:col-start-5" : ""
                  } ${index % 3 === 0 ? "aspect-[4/5] md:aspect-[16/9]" : "aspect-[4/5] md:aspect-[4/3]"}`}
                >
                  <Image
                    src={obra.image}
                    alt={obra.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                  <div aria-hidden className="grain absolute inset-0" />
                </div>
                <figcaption
                  className={`md:col-span-4 md:pb-2 ${
                    invert ? "md:order-1 md:col-start-1 md:text-right" : ""
                  }`}
                >
                  <p className="display text-5xl text-blood md:text-6xl">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="display mt-3 text-2xl text-ink uppercase md:text-3xl">
                    {obra.title}
                  </p>
                  <p className="museum-caption mt-2">{obra.style}</p>
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
