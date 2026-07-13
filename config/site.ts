export const site = {
  name: "Lancellotti Tattoo Clinic",
  shortName: "Estúdio Lancellotti",
  artist: "William Lancellotti",
  tagline: "Arte, identidade e expressão em cada detalhe.",
  description:
    "Projetos autorais de tatuagem e aplicação de piercing com atendimento personalizado em Maringá. Estúdio de William Lancellotti — realismo, blackwork, fine line, lettering e neotradicional.",

  /** WhatsApp do estúdio: (44) 99827-6324, com DDI+DDD, somente dígitos. */
  whatsapp: "5544998276324",

  /**
   * EDITAR: vídeo do hero (William tatuando, macro, câmera lenta).
   * Coloque o arquivo em public/videos/hero.mp4 e troque para "/videos/hero.mp4".
   * Vazio = fallback cinematográfico com a foto do retrato (zoom lento + grão).
   */
  heroVideo: "",

  address: "Av. Pedro Taques, 2095 — Jardim Alvorada",
  city: "Maringá — PR",
  zip: "87033-000",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Lancellotti+Tattoo+Clinic+Av.+Pedro+Taques+2095+Maring%C3%A1",

  /** EDITAR: horários reais de atendimento do estúdio de tatuagem/piercing. */
  hours: [
    { days: "Segunda a sexta", time: "9h às 19h" },
    { days: "Sábado", time: "9h às 17h" },
  ],

  instagram: "lancellotti_tattoo",
  instagramUrl: "https://www.instagram.com/lancellotti_tattoo/",
  googleRating: { value: "5,0", count: 9 },

  /** EDITAR: URL final após o deploy (domínio da Vercel ou próprio). */
  url: "https://lancellotti-eight.vercel.app",

  whatsappDefaultMessage:
    "Olá! Vim pelo site da Lancellotti Tattoo Clinic e quero mais informações.",
} as const;

export type Site = typeof site;
