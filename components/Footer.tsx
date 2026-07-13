import Image from "next/image";
import { Instagram, MapPin, Clock, Star } from "lucide-react";
import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-paper/15 bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/brand/logo-l.png"
              alt={`Logo do ${site.shortName}`}
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="display text-lg uppercase">Lancellotti</p>
              <p className="text-sm text-paper/60">
                {site.artist} · Maringá — PR
              </p>
            </div>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-paper/70">
            <Star className="h-4 w-4 text-blood" aria-hidden />
            {site.googleRating.value} no Google · {site.googleRating.count}{" "}
            avaliações
          </p>
        </div>

        <div>
          <h2 className="text-[0.68rem] font-semibold tracking-[0.14em] text-paper/45 uppercase">Onde estamos</h2>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-start gap-2 text-sm text-paper/70 transition-colors hover:text-paper"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blood" aria-hidden />
            <span>
              {site.address}
              <br />
              {site.city} · {site.zip}
            </span>
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 text-sm text-paper/70 transition-colors hover:text-paper"
          >
            <Instagram className="h-4 w-4 text-blood" aria-hidden />@
            {site.instagram}
          </a>
        </div>

        <div>
          <h2 className="text-[0.68rem] font-semibold tracking-[0.14em] text-paper/45 uppercase">Horários</h2>
          <ul className="mt-4 space-y-2">
            {site.hours.map((h) => (
              <li
                key={h.days}
                className="flex items-center gap-2 text-sm text-paper/70"
              >
                <Clock className="h-4 w-4 shrink-0 text-blood" aria-hidden />
                {h.days} · {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-paper/40 md:px-6">
          © {new Date().getFullYear()} {site.name}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
