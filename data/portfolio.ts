export const tattooStyles = [
  "Realismo",
  "Blackwork",
  "Fine line",
  "Lettering",
  "Neotradicional",
] as const;
export type TattooStyle = (typeof tattooStyles)[number];

export const piercingRegions = [
  "Orelha",
  "Nariz",
  "Sobrancelha",
  "Boca",
  "Umbigo",
  "Outros",
] as const;
export type PiercingRegion = (typeof piercingRegions)[number];

export type TattooItem = {
  id: string;
  image: string;
  alt: string;
  style: TattooStyle;
};

export type PiercingItem = {
  id: string;
  image: string;
  alt: string;
  region: PiercingRegion;
};

export const tattoos: TattooItem[] = [
  {
    id: "realismo-ceifador",
    image: "/images/tattoo/realismo-ceifador.jpg",
    alt: "Ceifador a cavalo em black and grey com detalhes em vermelho na perna",
    style: "Realismo",
  },
  {
    id: "blackwork-nordico",
    image: "/images/tattoo/blackwork-nordico.jpg",
    alt: "Fechamento de braço em estilo nórdico com guerreiro, runas e dragão",
    style: "Blackwork",
  },
  {
    id: "blackwork-samambaias",
    image: "/images/tattoo/blackwork-samambaias.jpg",
    alt: "Ramos de samambaia em blackwork descendo o antebraço",
    style: "Blackwork",
  },
  {
    id: "blackwork-morcego",
    image: "/images/tattoo/blackwork-morcego.jpg",
    alt: "Morcego de asas abertas no colo com lettering gótico no pescoço",
    style: "Blackwork",
  },
  {
    id: "blackwork-cobra-katana",
    image: "/images/tattoo/blackwork-cobra-katana.jpg",
    alt: "Serpente enrolada em katana na lateral do corpo",
    style: "Blackwork",
  },
  {
    id: "blackwork-mandala",
    image: "/images/tattoo/blackwork-mandala.jpg",
    alt: "Mandala em pontilhismo ao redor da orelha, na lateral da cabeça",
    style: "Blackwork",
  },
  {
    id: "blackwork-mariposa",
    image: "/images/tattoo/blackwork-mariposa.jpg",
    alt: "Mariposa com caveira no corpo, em blackwork na panturrilha",
    style: "Blackwork",
  },
  {
    id: "blackwork-tridente",
    image: "/images/tattoo/blackwork-tridente.jpg",
    alt: "Figura de chapéu com tridente em traço de esboço na perna",
    style: "Blackwork",
  },
  {
    id: "fineline-floral-costela",
    image: "/images/tattoo/fineline-floral-costela.jpg",
    alt: "Composição floral em fine line na costela",
    style: "Fine line",
  },
  {
    id: "fineline-peonia",
    image: "/images/tattoo/fineline-peonia.jpg",
    alt: "Peônia com folhagens em fine line no antebraço",
    style: "Fine line",
  },
  {
    id: "fineline-asas-coracao",
    image: "/images/tattoo/fineline-asas-coracao.jpg",
    alt: "Coração alado com auréola e nome em caligrafia nas costas",
    style: "Fine line",
  },
  {
    id: "lettering-chicano",
    image: "/images/tattoo/lettering-chicano.jpg",
    alt: "Frase em lettering chicano cobrindo o antebraço",
    style: "Lettering",
  },
  {
    id: "lettering-mao",
    image: "/images/tattoo/lettering-mao.jpg",
    alt: "Lettering ornamentado na mão",
    style: "Lettering",
  },
  {
    id: "lettering-resiliencia",
    image: "/images/tattoo/lettering-resiliencia.jpg",
    alt: "Palavra Resiliência em caligrafia com ornamentos na cintura",
    style: "Lettering",
  },
  {
    id: "neotrad-asas-2025",
    image: "/images/tattoo/neotrad-asas-2025.jpg",
    alt: "Asas abertas com o ano 2025 na nuca",
    style: "Neotradicional",
  },
];

export type Obra = {
  id: string;
  numeral: string;
  title: string;
  style: TattooStyle;
  image: string;
  alt: string;
};

/** Seleção curada para a vitrine "Obras" — tratadas como peças de coleção. */
export const obras: Obra[] = [
  {
    id: "obra-saga",
    numeral: "I",
    title: "Saga",
    style: "Blackwork",
    image: "/images/tattoo/blackwork-nordico.jpg",
    alt: "Fechamento de braço em estilo nórdico com guerreiro, runas e dragão",
  },
  {
    id: "obra-ceifador",
    numeral: "II",
    title: "O Ceifador",
    style: "Realismo",
    image: "/images/tattoo/realismo-ceifador.jpg",
    alt: "Ceifador a cavalo em black and grey com brasas vermelhas na perna",
  },
  {
    id: "obra-lamina",
    numeral: "III",
    title: "Lâmina",
    style: "Blackwork",
    image: "/images/tattoo/blackwork-cobra-katana.jpg",
    alt: "Serpente enrolada em katana na lateral do corpo",
  },
  {
    id: "obra-noturno",
    numeral: "IV",
    title: "Noturno",
    style: "Blackwork",
    image: "/images/tattoo/blackwork-morcego.jpg",
    alt: "Morcego de asas abertas cobrindo o colo, com lettering gótico no pescoço",
  },
  {
    id: "obra-resiliencia",
    numeral: "V",
    title: "Resiliência",
    style: "Lettering",
    image: "/images/tattoo/lettering-resiliencia.jpg",
    alt: "Palavra Resiliência em caligrafia ornamentada na cintura",
  },
];

/**
 * Fotos reais de piercing removidas a pedido do Rafael (baixa resolução).
 * Quando o cliente enviar fotos novas, adicionar aqui — as regiões e a
 * galeria da aba Piercings se preenchem sozinhas.
 */
export const piercings: PiercingItem[] = [];
