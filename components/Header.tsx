"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#obras", label: "Obras" },
  { href: "#arquivo", label: "Arquivo" },
  { href: "#piercing", label: "Piercing" },
  { href: "#faq", label: "Dúvidas" },
];

/** Transparente sobre o hero; ganha fundo papel ao rolar. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <a
          href="#conteudo"
          className={`display text-lg tracking-tight uppercase transition-colors ${
            scrolled ? "text-ink" : "text-paper"
          }`}
        >
          Lancellotti
        </a>

        <nav
          aria-label="Seções da página"
          className="hidden items-center gap-8 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-ink/60 hover:text-ink"
                  : "text-paper/75 hover:text-paper"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#projeto"
          className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-colors ${
            scrolled
              ? "bg-ink text-paper hover:bg-blood"
              : "bg-paper text-ink hover:bg-blood hover:text-paper"
          }`}
        >
          Iniciar projeto
        </a>
      </div>
    </header>
  );
}
