"use client";

import { useEffect, useRef } from "react";

/**
 * Tela de carregamento (receita do Rafael Razeira Estúdio):
 * segura o overlay até a página estar pronta — com tempo mínimo para
 * a marca aparecer e teto de segurança — e sai "pixelando": grade de
 * quadrados escuros que somem de baixo para cima, com jitter.
 */
const MIN_SHOW = 700; // ms mínimos com a logo na tela (evita "flash")
const MAX_WAIT = 7000; // teto: sai mesmo se algum asset demorar
const ROW_STEP = 55; // ms entre uma fileira e a de cima
const JITTER = 110; // aleatoriedade por quadrado (o "pixelado")

export function Loader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = ref.current;
    if (!loader || loader.dataset.done) return;
    document.body.classList.add("loading");

    const t0 = performance.now();
    const timeouts: number[] = [];
    let leaving = false;

    const done = () => {
      loader.dataset.done = "true";
      loader.style.display = "none";
      document.body.classList.remove("loading");
    };

    const leave = () => {
      if (leaving) return;
      leaving = true;
      const cell = Math.min(Math.max(window.innerWidth / 9, 44), 120);
      const cols = Math.ceil(window.innerWidth / cell);
      const rows = Math.ceil(window.innerHeight / cell);

      const grid = document.createElement("div");
      grid.className = "loader__grid";
      grid.setAttribute("aria-hidden", "true");
      grid.style.gridTemplateColumns = `repeat(${cols},1fr)`;
      grid.style.gridTemplateRows = `repeat(${rows},1fr)`;
      let maxDelay = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const s = document.createElement("span");
          const delay = (rows - 1 - r) * ROW_STEP + Math.random() * JITTER;
          s.style.transitionDelay = `${delay.toFixed(0)}ms`;
          maxDelay = Math.max(maxDelay, delay);
          grid.appendChild(s);
        }
      }
      loader.appendChild(grid);
      // dois frames: garante que a grade pintou antes de o fundo sumir
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          loader.classList.add("leaving");
          timeouts.push(window.setTimeout(done, maxDelay + 350));
        })
      );
    };

    const exitAfterMin = () => {
      const elapsed = performance.now() - t0;
      timeouts.push(window.setTimeout(leave, Math.max(0, MIN_SHOW - elapsed)));
    };

    if (document.readyState === "complete") exitAfterMin();
    else window.addEventListener("load", exitAfterMin, { once: true });
    timeouts.push(window.setTimeout(leave, MAX_WAIT)); // nunca prende o visitante

    return () => {
      timeouts.forEach(clearTimeout);
      window.removeEventListener("load", exitAfterMin);
      document.body.classList.remove("loading");
    };
  }, []);

  return (
    <div ref={ref} className="loader" role="status" aria-label="Carregando">
      <div className="loader__center">
        {/* img simples: precisa pintar imediatamente, sem otimizador no meio */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/brand/loader-l.png" alt="" className="loader__logo" />
        <p className="loader__text">Carregando…</p>
      </div>
    </div>
  );
}
