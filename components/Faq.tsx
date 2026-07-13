"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { faq } from "@/data/faq";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  const reduced = useReducedMotion();

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {faq.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={`${baseId}-q-${index}`}
                aria-expanded={isOpen}
                aria-controls={`${baseId}-a-${index}`}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span
                  className={`text-base font-semibold transition-colors md:text-lg ${
                    isOpen ? "text-blood" : "text-ink"
                  }`}
                >
                  {item.question}
                </span>
                <Plus
                  aria-hidden
                  className={`h-5 w-5 shrink-0 text-blood transition-transform duration-300 motion-reduce:transition-none ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`${baseId}-a-${index}`}
                  role="region"
                  aria-labelledby={`${baseId}-q-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={
                    reduced ? { duration: 0 } : { duration: 0.28, ease: "easeOut" }
                  }
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-6 text-sm leading-relaxed text-ink/65 md:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
