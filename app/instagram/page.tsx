"use client";

import { useMemo, useState } from "react";
import { Bot, Sparkles, UserPlus } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/common/section-header";
import { instagramScenarios } from "@/data/conversations";
import { IntentBadge } from "@/components/common/intent-badge";
import { SentimentBadge } from "@/components/common/sentiment-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function InstagramPage() {
  const [active, setActive] = useState(instagramScenarios[0].id);
  const scenario = useMemo(
    () => instagramScenarios.find((item) => item.id === active) ?? instagramScenarios[0],
    [active]
  );

  return (
    <PageShell>
      <SectionHeader
        title="Simulador de Instagram DM"
        subtitle="Atencion inteligente de mensajes directos con clasificacion de intencion y sentimiento."
      />

      <div className="grid gap-6 xl:grid-cols-[0.4fr_0.6fr]">
        <Card>
          <CardContent className="space-y-3 p-4">
            <p className="text-sm font-semibold text-ink-900">Conversaciones</p>
            {instagramScenarios.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`w-full rounded-xl border p-3 text-left transition ${
                  item.id === active ? "border-pink-300 bg-pink-50" : "border-ink-200 hover:bg-ink-100"
                }`}
              >
                <p className="text-sm font-semibold text-ink-900">{item.title}</p>
                <p className="mt-1 text-xs text-ink-500">Canal: Instagram DM</p>
              </button>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 p-5">
            <div className="rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 p-4 text-white">
              <p className="text-sm font-semibold">Instagram DM - @comfguajira</p>
              <p className="text-xs text-pink-50">Canal social para atencion y captacion</p>
            </div>
            <div className="space-y-3 rounded-2xl bg-ink-100 p-4">
              <div className="max-w-[80%] rounded-2xl bg-white p-3 text-sm text-ink-800">
                Hola, necesito informacion sobre {scenario.intent.toLowerCase()}.
              </div>
              <div className="ml-auto max-w-[80%] rounded-2xl bg-pink-500 p-3 text-sm text-white">
                Gracias por escribirnos. Te comparto informacion de inmediato.
              </div>
              <div className="max-w-[80%] rounded-2xl bg-white p-3 text-sm text-ink-800">
                Si deseas, tambien puedo pasarte con un asesor especializado.
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-pink-100 text-pink-700">Origen: Instagram</Badge>
              <IntentBadge intent={scenario.intent} />
              <SentimentBadge sentiment={scenario.sentiment as "positivo" | "neutro" | "negativo"} />
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              <Button>
                <Sparkles className="mr-2 h-4 w-4" />
                Responder con IA
              </Button>
              <Button variant="outline">
                <UserPlus className="mr-2 h-4 w-4" />
                Escalar a asesor
              </Button>
            </div>
            <div className="rounded-xl border border-ink-200 p-3 text-xs text-ink-500">
              <Bot className="mr-1 inline h-3 w-3" />
              Clasificacion automatica en tiempo real para enrutamiento y prioridad.
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
