import type { LucideIcon } from "lucide-react";
import {
  UserCheck,
  ShieldCheck,
  BookOpenCheck,
  ScanEye,
  Gem,
  HeartHandshake,
} from "lucide-react";

export type Benefit = { icon: LucideIcon; title: string; description: string };

export const piercingBenefits: Benefit[] = [
  {
    icon: UserCheck,
    title: "Atendimento individual",
    description: "Horário reservado só para você, sem fila e sem pressa.",
  },
  {
    icon: ShieldCheck,
    title: "Materiais esterilizados",
    description: "Agulhas descartáveis e instrumentais com esterilização controlada.",
  },
  {
    icon: BookOpenCheck,
    title: "Orientação de cuidados",
    description: "Passo a passo claro de higienização para cada fase da cicatrização.",
  },
  {
    icon: ScanEye,
    title: "Avaliação do local",
    description: "Análise da anatomia da região antes de marcar o ponto exato.",
  },
  {
    icon: Gem,
    title: "Escolha da joia",
    description: "Indicação de material, tamanho e modelo adequados à perfuração.",
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento pós-aplicação",
    description: "Canal aberto no WhatsApp para dúvidas durante a cicatrização.",
  },
];
