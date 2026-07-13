"use client";

import { MessageCircle } from "lucide-react";
import { waDefault } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={waDefault()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-whats px-4 py-3.5 text-ink shadow-lg shadow-ink/20 transition-transform hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      <MessageCircle className="h-5 w-5" aria-hidden />
      <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap transition-[max-width] duration-300 group-hover:max-w-40 group-focus-visible:max-w-40 motion-reduce:transition-none">
        Chamar no WhatsApp
      </span>
    </a>
  );
}
