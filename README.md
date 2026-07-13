# Lancellotti Tattoo Clinic

Landing page do estúdio **Lancellotti Tattoo Clinic** (William Lancellotti — tatuagem e aplicação de piercing, Maringá-PR).

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19 + TypeScript
- Tailwind CSS 4 (design tokens em `app/globals.css`)
- framer-motion + lucide-react

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

## Configuração

Os dados do estúdio (WhatsApp, endereço, horários, Instagram) ficam centralizados em `config/site.ts` — os campos a revisar estão marcados com `EDITAR`.

O acervo de fotos fica em `data/portfolio.ts` + `public/images/`.
