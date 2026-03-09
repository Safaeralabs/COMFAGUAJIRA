"use client";

import { useMemo, useState } from "react";
import { ArrowRight, MessageCircle, MoveUpRight, UserRoundCheck } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/common/section-header";
import { tiktokScenarios } from "@/data/conversations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TikTokPage() {
  const [activeId, setActiveId] = useState(tiktokScenarios[0].id);
  const scenario = useMemo(
    () => tiktokScenarios.find((item) => item.id === activeId) ?? tiktokScenarios[0],
    [activeId]
  );

  return (
    <PageShell>
      <SectionHeader
        title="Simulador de TikTok"
        subtitle="Representacion conceptual de captacion y derivacion desde contenido social."
      />

      <div className="grid gap-6 xl:grid-cols-[0.45fr_0.55fr]">
        <Card>
          <CardContent className="space-y-3 p-4">
            <p className="text-sm font-semibold text-ink-900">Escenarios mock</p>
            {tiktokScenarios.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`w-full rounded-xl border p-3 text-left transition ${
                  item.id === activeId ? "border-slate-900 bg-slate-100" : "border-ink-200 hover:bg-ink-100"
                }`}
              >
                <p className="text-sm font-semibold text-ink-900">{item.title}</p>
                <p className="text-xs text-ink-500">{item.source}</p>
              </button>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800 p-4 text-white">
              <p className="text-sm font-semibold">TikTok Engagement</p>
              <p className="text-xs text-slate-200">Atencion inicial y direccionamiento al canal ideal</p>
            </div>
            <CardContent className="space-y-4 p-5">
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="mb-2 text-xs uppercase tracking-wide text-slate-500">{scenario.source}</p>
                <p className="text-sm font-medium text-slate-800">{scenario.message}</p>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-ink-200 p-3">
                  <p className="text-xs text-ink-500">Intencion detectada</p>
                  <p className="font-semibold text-ink-900">Interes en servicios</p>
                </div>
                <div className="rounded-xl border border-ink-200 p-3">
                  <p className="text-xs text-ink-500">Respuesta sugerida</p>
                  <p className="font-semibold text-ink-900">Breve + CTA a canal de conversion</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button>
                  Continuar por WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">
                  Ir al sitio web
                  <MoveUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-2 p-4 text-sm text-ink-600">
              <p className="font-semibold text-ink-900">
                <UserRoundCheck className="mr-2 inline h-4 w-4 text-brand-600" />
                Uso comercial del canal
              </p>
              <p>
                TikTok se usa como puerta de entrada para audiencia joven, detectando intencion y derivando a WhatsApp o Web para cierre de atencion.
              </p>
              <p>
                <MessageCircle className="mr-1 inline h-4 w-4 text-brand-600" />
                Permite captar leads y reducir friccion en primeras interacciones.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
