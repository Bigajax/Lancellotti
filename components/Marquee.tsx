import Image from "next/image";

export type MarqueeTile = {
  image: string;
  alt: string;
  /** Largura do tile em rem — variação dá ritmo de colagem. */
  wide?: boolean;
};

type MarqueeProps = {
  tiles: MarqueeTile[];
  /** Direção alternada entre faixas. */
  reverse?: boolean;
  slow?: boolean;
};

/**
 * Faixa de mídia em rolagem contínua (estilo colagem do Patreon).
 * CSS puro; com prefers-reduced-motion a faixa fica estática.
 */
export function Marquee({ tiles, reverse = false, slow = false }: MarqueeProps) {
  const track = [...tiles, ...tiles];
  return (
    <div className="overflow-hidden" aria-hidden={false}>
      <div
        className={`flex w-max gap-4 ${
          slow ? "animate-marquee-slow" : "animate-marquee"
        }`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {track.map((tile, i) => (
          <div
            key={`${tile.image}-${i}`}
            className={`relative h-52 shrink-0 overflow-hidden rounded-3xl border border-ink/10 md:h-64 ${
              tile.wide ? "w-72 md:w-96" : "w-44 md:w-52"
            }`}
          >
            <Image
              src={tile.image}
              alt={i < tiles.length ? tile.alt : ""}
              fill
              sizes="384px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
