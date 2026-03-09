"use client";

import { useMemo, useState } from "react";
import { CheckCheck, Clock3 } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/common/section-header";
import { PhoneMockup } from "@/components/common/phone-mockup";
import { whatsappScenarios } from "@/data/conversations";
import { campaigns } from "@/data/campaigns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function WhatsAppPage() {
  const [scenarioId, setScenarioId] = useState(whatsappScenarios[0].id);
  const activeScenario = useMemo(
    () => whatsappScenarios.find((item) => item.id === scenarioId) ?? whatsappScenarios[0],
    [scenarioId]
  );

  return (
    <PageShell>
      <SectionHeader
        title="Simulador de WhatsApp"
        subtitle="Escenarios mock de consultas, FAQ, escalamiento y campanas salientes."
        action={
          <div className="flex items-center gap-2">
            <select
              value={scenarioId}
              onChange={(e) => setScenarioId(e.target.value)}
              className="rounded-xl border border-ink-300 bg-white px-3 py-2 text-sm"
            >
              {whatsappScenarios.map((scenario) => (
                <option key={scenario.id} value={scenario.id}>
                  {scenario.title}
                </option>
              ))}
            </select>
            <Button>Simular flujo</Button>
          </div>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <PhoneMockup title="WhatsApp Business">
          <div className="space-y-3">
            <div className="rounded-xl bg-emerald-600 p-3 text-white">
              <p className="text-sm font-semibold">COMFAGUAJIRA Chatbot</p>
              <p className="text-xs text-emerald-100">Escenario: {activeScenario.title}</p>
            </div>
            {activeScenario.messages.map((msg, index) => (
              <div
                key={`${msg.text}-${index}`}
                className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                  msg.from === "user" ? "ml-auto bg-emerald-500 text-white" : "bg-white text-ink-800"
                }`}
              >
                <p>{msg.text}</p>
                <p className={`mt-1 text-[11px] ${msg.from === "user" ? "text-emerald-100" : "text-ink-500"}`}>
                  {msg.time}
                  {msg.from === "user" ? <CheckCheck className="ml-1 inline h-3 w-3" /> : null}
                </p>
              </div>
            ))}
            <div className="rounded-lg bg-amber-100 p-2 text-xs text-amber-900">
              <Clock3 className="mr-1 inline h-3 w-3" />
              Ventana de 24 horas activa para respuestas de servicio al usuario.
            </div>
          </div>
        </PhoneMockup>

        <div className="space-y-4">
          <div className="rounded-2xl border border-ink-200 bg-white p-5">
            <p className="text-sm text-ink-500">Tipo de conversacion</p>
            <div className="mt-2 flex items-center gap-3">
              <Badge className="bg-emerald-100 text-emerald-800">{activeScenario.label}</Badge>
              <p className="text-sm text-ink-700">Clasificacion automatica para trazabilidad de costos.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-ink-200 bg-white p-5">
            <p className="mb-3 text-sm font-semibold text-ink-900">Plantillas y campanas salientes</p>
            <div className="space-y-2">
              {campaigns
                .filter((campaign) => campaign.channel === "WhatsApp")
                .map((campaign) => (
                  <div key={campaign.id} className="rounded-xl bg-ink-100 p-3">
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-ink-900">{campaign.name}</p>
                      <Badge className="bg-brand-100 text-brand-800">{campaign.type}</Badge>
                    </div>
                    <p className="text-xs text-ink-600">{campaign.message}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
