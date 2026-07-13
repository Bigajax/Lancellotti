"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { piercingRegions, tattooStyles } from "@/data/portfolio";
import {
  waFormTattoo,
  waFormPiercing,
  type PiercingFormData,
} from "@/lib/whatsapp";

type Service = "tatuagem" | "piercing";

const stepLabels = ["Projeto", "Detalhes", "Contato"] as const;

const tamanhos = [
  "Pequena — até 10cm",
  "Média — 10 a 20cm",
  "Grande — acima de 20cm",
  "Fechamento (braço, costas, perna)",
];

const fieldClass =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 focus:border-ink focus-visible:outline-none";

const labelClass = "mb-2 block text-sm font-semibold text-ink";

export function ProjetoForm() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<Service>("tatuagem");

  // Tatuagem
  const [ideia, setIdeia] = useState("");
  const [estilo, setEstilo] = useState("");
  const [regiaoTattoo, setRegiaoTattoo] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [possuiReferencia, setPossuiReferencia] = useState<"sim" | "nao">("nao");

  // Piercing
  const [tipoPiercing, setTipoPiercing] = useState("");
  const [regiaoPiercing, setRegiaoPiercing] =
    useState<PiercingFormData["regiao"]>("");
  const [possuiJoia, setPossuiJoia] = useState<"sim" | "nao">("nao");
  const [dataDesejada, setDataDesejada] = useState("");
  const [observacoes, setObservacoes] = useState("");

  // Contato
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < stepLabels.length - 1) {
      setStep(step + 1);
      return;
    }
    const url =
      service === "tatuagem"
        ? waFormTattoo({
            nome,
            whatsapp,
            ideia,
            estilo,
            regiao: regiaoTattoo,
            tamanho,
            possuiReferencia,
          })
        : waFormPiercing({
            nome,
            whatsapp,
            tipoPiercing,
            regiao: regiaoPiercing,
            possuiJoia,
            dataDesejada,
            observacoes,
          });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="projeto" aria-labelledby="projeto-titulo" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">Iniciar um projeto</p>
            <h2
              id="projeto-titulo"
              className="display mt-5 text-3xl text-ink uppercase md:text-5xl"
            >
              Toda obra começa com uma conversa.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-ink/60">
              Três passos rápidos e a sua ideia chega pronta no WhatsApp do
              estúdio.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            aria-label="Iniciar um projeto"
            className="mt-12 rounded-3xl border border-ink/10 bg-surface p-6 md:p-10"
          >
            {/* Progresso */}
            <div className="flex items-center justify-between gap-6">
              <p className="text-sm font-semibold text-ink">
                {stepLabels[step]}
                <span className="ml-2 font-normal text-ink/45">
                  · etapa {step + 1} de {stepLabels.length}
                </span>
              </p>
              <div
                className="flex w-32 gap-1.5 md:w-44"
                role="progressbar"
                aria-valuenow={step + 1}
                aria-valuemin={1}
                aria-valuemax={stepLabels.length}
                aria-label={`Etapa ${step + 1} de ${stepLabels.length}`}
              >
                {stepLabels.map((label, i) => (
                  <span
                    key={label}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      i <= step ? "bg-blood" : "bg-ink/10"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8">
              {/* Etapa 1 — escolha do serviço */}
              {step === 0 ? (
                <fieldset>
                  <legend className="display text-xl text-ink uppercase">
                    O que vamos criar?
                  </legend>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {(
                      [
                        {
                          value: "tatuagem",
                          title: "Tatuagem",
                          hint: "Um projeto autoral, do rascunho à pele.",
                        },
                        {
                          value: "piercing",
                          title: "Piercing",
                          hint: "Aplicação precisa, da joia ao cuidado.",
                        },
                      ] as const
                    ).map((option) => (
                      <label
                        key={option.value}
                        className={`block cursor-pointer rounded-2xl border-2 bg-paper p-6 transition-colors ${
                          service === option.value
                            ? "border-ink"
                            : "border-transparent hover:border-ink/25"
                        }`}
                      >
                        <input
                          type="radio"
                          name="servico"
                          value={option.value}
                          checked={service === option.value}
                          onChange={() => setService(option.value)}
                          className="sr-only"
                        />
                        <span className="flex items-center justify-between">
                          <span className="display text-lg text-ink uppercase">
                            {option.title}
                          </span>
                          <span
                            aria-hidden
                            className={`h-4 w-4 rounded-full border-2 ${
                              service === option.value
                                ? "border-blood bg-blood"
                                : "border-ink/30"
                            }`}
                          />
                        </span>
                        <span className="mt-2 block text-sm leading-relaxed text-ink/55">
                          {option.hint}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              ) : null}

              {/* Etapa 2 — detalhes: tatuagem */}
              {step === 1 && service === "tatuagem" ? (
                <div className="space-y-5">
                  <div>
                    <label htmlFor="pj-ideia" className={labelClass}>
                      Qual é a sua ideia?
                    </label>
                    <textarea
                      id="pj-ideia"
                      rows={3}
                      required
                      value={ideia}
                      onChange={(e) => setIdeia(e.target.value)}
                      className={fieldClass}
                      placeholder="Conte em poucas linhas o que você imagina"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="pj-estilo" className={labelClass}>
                        Estilo
                      </label>
                      <select
                        id="pj-estilo"
                        value={estilo}
                        onChange={(e) => setEstilo(e.target.value)}
                        className={fieldClass}
                      >
                        <option value="">Ainda não sei</option>
                        {tattooStyles.map((style) => (
                          <option key={style} value={style}>
                            {style}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="pj-regiao" className={labelClass}>
                        Região do corpo
                      </label>
                      <input
                        id="pj-regiao"
                        value={regiaoTattoo}
                        onChange={(e) => setRegiaoTattoo(e.target.value)}
                        className={fieldClass}
                        placeholder="Ex.: antebraço"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="pj-tamanho" className={labelClass}>
                        Tamanho aproximado
                      </label>
                      <select
                        id="pj-tamanho"
                        value={tamanho}
                        onChange={(e) => setTamanho(e.target.value)}
                        className={fieldClass}
                      >
                        <option value="">Selecione…</option>
                        {tamanhos.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <fieldset>
                      <legend className={labelClass}>Tem referências?</legend>
                      <div className="flex gap-3">
                        {(
                          [
                            { value: "sim", label: "Sim" },
                            { value: "nao", label: "Ainda não" },
                          ] as const
                        ).map((option) => (
                          <label
                            key={option.value}
                            className={`flex-1 cursor-pointer rounded-xl border px-4 py-3 text-center text-sm font-medium transition-colors ${
                              possuiReferencia === option.value
                                ? "border-ink bg-ink text-paper"
                                : "border-ink/15 bg-paper text-ink/70 hover:border-ink/40"
                            }`}
                          >
                            <input
                              type="radio"
                              name="referencia"
                              checked={possuiReferencia === option.value}
                              onChange={() => setPossuiReferencia(option.value)}
                              className="sr-only"
                            />
                            {option.label}
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                </div>
              ) : null}

              {/* Etapa 2 — detalhes: piercing */}
              {step === 1 && service === "piercing" ? (
                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="pj-tipo" className={labelClass}>
                        Tipo de piercing
                      </label>
                      <input
                        id="pj-tipo"
                        value={tipoPiercing}
                        onChange={(e) => setTipoPiercing(e.target.value)}
                        className={fieldClass}
                        placeholder="Ex.: argola, industrial…"
                      />
                    </div>
                    <div>
                      <label htmlFor="pj-regiao-p" className={labelClass}>
                        Região do corpo
                      </label>
                      <select
                        id="pj-regiao-p"
                        value={regiaoPiercing}
                        onChange={(e) =>
                          setRegiaoPiercing(
                            e.target.value as PiercingFormData["regiao"]
                          )
                        }
                        className={fieldClass}
                      >
                        <option value="">Selecione…</option>
                        {piercingRegions.map((region) => (
                          <option key={region} value={region}>
                            {region}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <fieldset>
                      <legend className={labelClass}>Já possui joia?</legend>
                      <div className="flex gap-3">
                        {(
                          [
                            { value: "sim", label: "Sim" },
                            { value: "nao", label: "Não" },
                          ] as const
                        ).map((option) => (
                          <label
                            key={option.value}
                            className={`flex-1 cursor-pointer rounded-xl border px-4 py-3 text-center text-sm font-medium transition-colors ${
                              possuiJoia === option.value
                                ? "border-ink bg-ink text-paper"
                                : "border-ink/15 bg-paper text-ink/70 hover:border-ink/40"
                            }`}
                          >
                            <input
                              type="radio"
                              name="joia"
                              checked={possuiJoia === option.value}
                              onChange={() => setPossuiJoia(option.value)}
                              className="sr-only"
                            />
                            {option.label}
                          </label>
                        ))}
                      </div>
                    </fieldset>
                    <div>
                      <label htmlFor="pj-data" className={labelClass}>
                        Data desejada
                      </label>
                      <input
                        id="pj-data"
                        type="date"
                        value={dataDesejada}
                        onChange={(e) => setDataDesejada(e.target.value)}
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pj-obs" className={labelClass}>
                      Observações
                    </label>
                    <textarea
                      id="pj-obs"
                      rows={2}
                      value={observacoes}
                      onChange={(e) => setObservacoes(e.target.value)}
                      className={fieldClass}
                      placeholder="Alguma dúvida ou detalhe que devemos saber?"
                    />
                  </div>
                </div>
              ) : null}

              {/* Etapa 3 — contato */}
              {step === 2 ? (
                <div className="space-y-5">
                  <div>
                    <label htmlFor="pj-nome" className={labelClass}>
                      Nome
                    </label>
                    <input
                      id="pj-nome"
                      required
                      autoComplete="name"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className={fieldClass}
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="pj-whats" className={labelClass}>
                      WhatsApp
                    </label>
                    <input
                      id="pj-whats"
                      required
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className={fieldClass}
                      placeholder="(44) 99999-9999"
                    />
                  </div>
                  <p className="text-xs leading-relaxed text-ink/45">
                    Ao enviar, o WhatsApp abre com a mensagem do seu projeto de{" "}
                    {service} já escrita — é só confirmar o envio.
                  </p>
                </div>
              ) : null}
            </div>

            {/* Navegação */}
            <div className="mt-10 flex items-center justify-between gap-4">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink/60 transition-colors hover:text-ink"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden />
                  Voltar
                </button>
              ) : (
                <span />
              )}
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-paper transition-colors hover:bg-blood"
              >
                {step < stepLabels.length - 1 ? (
                  <>
                    Continuar
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden />
                    Enviar pelo WhatsApp
                  </>
                )}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
