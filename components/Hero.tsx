import Image from "next/image";
import { Marquee, type MarqueeTile } from "@/components/Marquee";
import { NameBand } from "@/components/NameBand";
import { Reveal } from "@/components/Reveal";
import { site } from "@/config/site";

const tilesA: MarqueeTile[] = [
  { image: "/images/tattoo/blackwork-samambaias.jpg", alt: "Samambaias em blackwork no antebraço", wide: true },
  { image: "/images/tattoo/blackwork-mariposa.jpg", alt: "Mariposa com caveira na panturrilha" },
  { image: "/images/tattoo/blackwork-morcego.jpg", alt: "Morcego em blackwork no colo" },
  { image: "/images/tattoo/lettering-resiliencia.jpg", alt: "Lettering Resiliência na cintura", wide: true },
  { image: "/images/tattoo/neotrad-asas-2025.jpg", alt: "Asas com o ano 2025 na nuca" },
  { image: "/images/tattoo/blackwork-mandala.jpg", alt: "Mandala em pontilhismo na lateral da cabeça", wide: true },
  { image: "/images/tattoo/fineline-floral-costela.jpg", alt: "Floral fine line na costela" },
];

const tilesB: MarqueeTile[] = [
  { image: "/images/tattoo/realismo-ceifador.jpg", alt: "Ceifador em black and grey com vermelho" },
  { image: "/images/tattoo/blackwork-nordico.jpg", alt: "Fechamento nórdico no braço", wide: true },
  { image: "/images/tattoo/lettering-chicano.jpg", alt: "Lettering chicano no antebraço" },
  { image: "/images/tattoo/fineline-peonia.jpg", alt: "Peônia com folhagens no antebraço" },
  { image: "/images/tattoo/blackwork-cobra-katana.jpg", alt: "Serpente e katana na lateral do corpo", wide: true },
  { image: "/images/tattoo/lettering-mao.jpg", alt: "Lettering ornamentado na mão" },
  { image: "/images/tattoo/fineline-asas-coracao.jpg", alt: "Coração alado com auréola nas costas", wide: true },
];

export function Hero() {
  return (
    <section
      aria-label={site.name}
      className="flex flex-col gap-10 overflow-hidden pb-8"
    >
      {/* Cena cinematográfica de borda a borda, com o header flutuando por cima */}
      <Reveal>
        <div className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
            {/* mobile: retrato só no topo, derretendo em tinta antes do texto;
                desktop: cena horizontal de borda a borda */}
            <div className="absolute inset-x-0 top-0 h-[54svh] md:inset-0 md:h-auto">
              <Image
                src="/images/hero/william-scene-mobile.jpg"
                alt={`${site.artist}, tatuador e piercer, diante do anel de luz do estúdio`}
                fill
                priority
                sizes="100vw"
                className="object-cover object-top md:hidden"
              />
              <Image
                src="/images/hero/william-scene.jpg"
                alt=""
                fill
                priority
                sizes="100vw"
                className="hidden object-cover object-[65%_30%] md:block"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent md:from-ink/90 md:via-ink/25"
              />
              <div
                aria-hidden
                className="absolute inset-0 hidden bg-gradient-to-r from-ink/60 to-transparent md:block"
              />
            </div>
            <div aria-hidden className="grain absolute inset-0" />

            <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
              <div className="relative max-w-2xl py-14 md:py-20">
              <h1 className="display text-[clamp(2.4rem,5.5vw,4.8rem)] text-paper uppercase">
                Arte, identidade e{" "}
                <span className="text-blood brightness-150">expressão</span> em
                cada detalhe.
              </h1>
              <p className="mt-7 max-w-md text-base leading-relaxed text-paper/70">
                Projetos autorais de tatuagem e aplicação de piercing com
                atendimento personalizado em Maringá.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projeto"
                  className="rounded-full bg-paper px-7 py-4 text-center text-sm font-semibold text-ink transition-colors hover:bg-blood hover:text-paper"
                >
                  Solicitar orçamento de tatuagem
                </a>
                <a
                  href="#projeto"
                  className="rounded-full border border-paper/35 px-7 py-4 text-center text-sm font-semibold text-paper transition-colors hover:border-paper"
                >
                  Agendar aplicação de piercing
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Letreiro — nome do artista logo abaixo da cena */}
      <NameBand />

      {/* Colagem viva do acervo */}
      <Reveal delay={0.22}>
        <div className="space-y-4">
          <Marquee tiles={tilesA} />
          <Marquee tiles={tilesB} reverse slow />
        </div>
      </Reveal>
    </section>
  );
}
