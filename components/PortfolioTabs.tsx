"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Instagram } from "lucide-react";
import {
  tattoos,
  piercings,
  tattooStyles,
  type TattooStyle,
} from "@/data/portfolio";
import { site } from "@/config/site";

const tabs = [
  { key: "tatuagens", label: "Tatuagens" },
  { key: "piercings", label: "Piercings" },
] as const;
type TabKey = (typeof tabs)[number]["key"];

type StyleFilter = "Todos" | TattooStyle;

// Regiões derivadas dos dados: nenhum filtro aponta para uma galeria vazia.
const regionsWithPhotos = Array.from(new Set(piercings.map((p) => p.region)));

const INITIAL_VISIBLE = 7;

/* Colagem: tiles de tamanhos variados quebram a cara de feed. */
const collageSpans = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
];

export function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("tatuagens");
  const [styleFilter, setStyleFilter] = useState<StyleFilter>("Todos");
  const [showAll, setShowAll] = useState(false);
  const tabRefs = useRef<Map<TabKey, HTMLButtonElement>>(new Map());
  const baseId = useId();
  const reduced = useReducedMotion();

  function onTabKeyDown(event: React.KeyboardEvent) {
    const index = tabs.findIndex((t) => t.key === activeTab);
    let next: TabKey | null = null;
    if (event.key === "ArrowRight") next = tabs[(index + 1) % tabs.length].key;
    if (event.key === "ArrowLeft")
      next = tabs[(index - 1 + tabs.length) % tabs.length].key;
    if (next) {
      event.preventDefault();
      setActiveTab(next);
      tabRefs.current.get(next)?.focus();
    }
  }

  const filteredTattoos =
    styleFilter === "Todos"
      ? tattoos
      : tattoos.filter((t) => t.style === styleFilter);
  const visibleTattoos = showAll
    ? filteredTattoos
    : filteredTattoos.slice(0, INITIAL_VISIBLE);
  const hiddenCount = filteredTattoos.length - visibleTattoos.length;

  return (
    <div>
      {/* Abas */}
      <div
        role="tablist"
        aria-label="Categorias do portfólio"
        className="flex gap-10 border-b border-ink/10"
        onKeyDown={onTabKeyDown}
      >
        {tabs.map((tab) => {
          const selected = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              ref={(el) => {
                if (el) tabRefs.current.set(tab.key, el);
              }}
              role="tab"
              id={`${baseId}-tab-${tab.key}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.key}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveTab(tab.key)}
              className={`display relative pb-3.5 text-xl uppercase transition-colors md:text-2xl ${
                selected ? "text-ink" : "text-ink/35 hover:text-ink/70"
              }`}
            >
              {tab.label}
              {selected ? (
                <motion.span
                  layoutId={`${baseId}-indicator`}
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 400, damping: 32 }
                  }
                  aria-hidden
                  className="absolute inset-x-0 -bottom-px block h-[3px] rounded-full bg-blood"
                />
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Painel: Tatuagens */}
      <div
        role="tabpanel"
        id={`${baseId}-panel-tatuagens`}
        aria-labelledby={`${baseId}-tab-tatuagens`}
        hidden={activeTab !== "tatuagens"}
        className="pt-7"
      >
        <div className="flex flex-wrap gap-2" aria-label="Filtrar por estilo">
          {(["Todos", ...tattooStyles] as StyleFilter[]).map((style) => (
            <button
              key={style}
              onClick={() => {
                setStyleFilter(style);
                setShowAll(false);
              }}
              aria-pressed={styleFilter === style}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                styleFilter === style
                  ? "bg-ink text-paper"
                  : "bg-ink/5 text-ink/60 hover:bg-ink/10 hover:text-ink"
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        <ul className="mt-7 grid auto-rows-[130px] grid-flow-dense grid-cols-2 gap-3 md:auto-rows-[170px] md:grid-cols-4 md:gap-4">
          {visibleTattoos.map((item, i) => (
            <li
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-surface ${
                collageSpans[i % collageSpans.length]
              }`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <span className="absolute bottom-2.5 left-2.5 rounded-full bg-paper/90 px-3 py-1 text-[10px] font-semibold tracking-[0.1em] text-ink uppercase">
                {item.style}
              </span>
            </li>
          ))}
        </ul>

        {hiddenCount > 0 || showAll ? (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="rounded-full border border-ink/25 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              {showAll ? "Mostrar menos" : `Ver acervo completo (+${hiddenCount})`}
            </button>
          </div>
        ) : null}
      </div>

      {/* Painel: Piercings */}
      <div
        role="tabpanel"
        id={`${baseId}-panel-piercings`}
        aria-labelledby={`${baseId}-tab-piercings`}
        hidden={activeTab !== "piercings"}
        className="pt-7"
      >
        <div className="flex flex-wrap gap-2" aria-label="Regiões com exemplos">
          {regionsWithPhotos.map((region) => (
            <span
              key={region}
              className="rounded-full bg-ink/5 px-4 py-2 text-xs font-semibold text-ink/60"
            >
              {region}
            </span>
          ))}
        </div>

        <ul className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {piercings.map((item) => (
            <li
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-surface"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <span className="absolute bottom-2.5 left-2.5 rounded-full bg-paper/90 px-3 py-1 text-[10px] font-semibold tracking-[0.1em] text-ink uppercase">
                {item.region}
              </span>
            </li>
          ))}
          <li className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-ink/20 bg-surface p-5">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-center text-sm font-medium text-ink/60 transition-colors hover:text-blood"
            >
              <Instagram className="h-6 w-6 text-blood" aria-hidden />
              Veja mais aplicações
              <br />
              no @{site.instagram}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
