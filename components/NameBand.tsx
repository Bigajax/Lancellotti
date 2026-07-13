/**
 * Letreiro com o nome do artista rolando devagar,
 * no sentido inverso às faixas de fotos — presença, não grito.
 * "William" em tinta, "Lancellotti" em vermelho; estático com prefers-reduced-motion.
 */
export function NameBand() {
  const half = [0, 1, 2, 3];
  return (
    <div
      aria-hidden
      className="overflow-hidden py-5 whitespace-nowrap md:py-8"
    >
      <div
        className="inline-flex w-max animate-nameband"
        style={{ animationDirection: "reverse" }}
      >
        {[0, 1].map((dup) =>
          half.map((i) => (
            <span
              key={`${dup}-${i}`}
              className="display px-[0.3em] text-[clamp(2.4rem,7.5vw,7rem)] leading-none text-ink uppercase"
            >
              William <span className="text-blood">Lancellotti.</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}
