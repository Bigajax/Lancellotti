import { site } from "@/config/site";
import type { PiercingRegion } from "@/data/portfolio";

export function waLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function waDefault(): string {
  return waLink(site.whatsappDefaultMessage);
}

export function waOrcamentoTattoo(): string {
  return waLink(
    "Olá! Vim pelo site da Lancellotti Tattoo Clinic e quero solicitar um orçamento de tatuagem."
  );
}

export function waAgendarPiercing(): string {
  return waLink(
    "Olá! Vim pelo site da Lancellotti Tattoo Clinic e quero agendar uma aplicação de piercing."
  );
}

export type TattooFormData = {
  nome: string;
  whatsapp: string;
  ideia: string;
  estilo: string;
  regiao: string;
  tamanho: string;
  possuiReferencia: "sim" | "nao";
};

export function waFormTattoo(data: TattooFormData): string {
  const lines = [
    "Olá! Quero iniciar um projeto de tatuagem:",
    `• Nome: ${data.nome}`,
    `• WhatsApp: ${data.whatsapp}`,
  ];
  if (data.ideia) lines.push(`• Ideia: ${data.ideia}`);
  if (data.estilo) lines.push(`• Estilo: ${data.estilo}`);
  if (data.regiao) lines.push(`• Região do corpo: ${data.regiao}`);
  if (data.tamanho) lines.push(`• Tamanho aproximado: ${data.tamanho}`);
  lines.push(
    `• Tenho referências: ${data.possuiReferencia === "sim" ? "Sim" : "Não"}`
  );
  return waLink(lines.join("\n"));
}

export type PiercingFormData = {
  nome: string;
  whatsapp: string;
  tipoPiercing: string;
  regiao: PiercingRegion | "";
  possuiJoia: "sim" | "nao";
  dataDesejada: string; // yyyy-mm-dd (input type="date")
  observacoes: string;
};

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return iso;
  return `${d}/${m}/${y}`;
}

export function waFormPiercing(data: PiercingFormData): string {
  const lines = [
    "Olá! Quero agendar uma aplicação de piercing:",
    `• Nome: ${data.nome}`,
    `• WhatsApp: ${data.whatsapp}`,
  ];
  if (data.tipoPiercing) lines.push(`• Tipo de piercing: ${data.tipoPiercing}`);
  if (data.regiao) lines.push(`• Região do corpo: ${data.regiao}`);
  lines.push(`• Já possuo joia: ${data.possuiJoia === "sim" ? "Sim" : "Não"}`);
  if (data.dataDesejada)
    lines.push(`• Data desejada: ${formatDate(data.dataDesejada)}`);
  if (data.observacoes) lines.push(`• Observações: ${data.observacoes}`);
  return waLink(lines.join("\n"));
}
