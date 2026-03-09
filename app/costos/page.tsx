import { CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/common/section-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  addons,
  importantNotes,
  pilotScenario,
  recurringPlans,
  whatsappAdvantages,
  whatsappExplanation
} from "@/data/pricing";
import { formatCop } from "@/lib/utils";

export default function CostosPage() {
  return (
    <PageShell>
      <SectionHeader
        title="Plataforma de atencion automatizada - Planes y precios"
        subtitle="Propuesta comercial orientada a validacion rapida, escalamiento por fases y eficiencia operativa."
      />

      <Card className="border-brand-300 bg-gradient-to-r from-brand-700 to-brand-600 text-white">
        <CardHeader>
          <p className="w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">Destacado</p>
          <CardTitle className="text-2xl text-white">{pilotScenario.name}</CardTitle>
          <CardDescription className="text-brand-100">
            {pilotScenario.duration} | Pago unico {formatCop(pilotScenario.price)}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-brand-50">{pilotScenario.objective}</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold">Canales incluidos</p>
              <ul className="space-y-1 text-sm">
                {pilotScenario.channels.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">Volumen incluido</p>
              <p className="text-sm">{pilotScenario.includedVolume}</p>
              <p className="mt-2 text-sm font-semibold">
                Conversaciones adicionales: {formatCop(pilotScenario.extraConversationPrice)} por conversacion
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Capacidades del chatbot con IA</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-ink-700">
            {pilotScenario.capabilities.map((item) => (
              <p key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-600" />
                {item}
              </p>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ejemplos de consultas que resuelve</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-ink-700">
            {pilotScenario.sampleQueries.map((item) => (
              <p key={item} className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 text-brand-600" />
                {item}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Integraciones incluidas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-ink-700">
            {pilotScenario.integrations.map((item) => (
              <p key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-600" />
                {item}
              </p>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Plataforma operativa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-ink-700">
            {pilotScenario.operation.map((item) => (
              <p key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-600" />
                {item}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Infraestructura incluida</CardTitle>
          <CardDescription>{pilotScenario.aiNote}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2 md:grid-cols-2">
          {pilotScenario.infrastructure.map((item) => (
            <p key={item} className="text-sm text-ink-700">
              - {item}
            </p>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Costos de WhatsApp (explicacion)</CardTitle>
          <CardDescription>{whatsappExplanation.intro}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-ink-700">
          <div>
            <p className="mb-2 font-semibold text-ink-900">Dentro de la ventana de 24 horas se puede enviar:</p>
            <div className="flex flex-wrap gap-2">
              {whatsappExplanation.serviceWindow.map((item) => (
                <span key={item} className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-ink-100 p-4">
            <p className="font-semibold text-ink-900">Ejemplo realista</p>
            <p>{whatsappExplanation.noCostExample.affiliates}</p>
            <p>{whatsappExplanation.noCostExample.inquiries}</p>
            <p>{whatsappExplanation.noCostExample.messagesPerInquiry}</p>
            <p>{whatsappExplanation.noCostExample.totalMessages}</p>
            <p className="mt-1 font-semibold text-emerald-700">Costo WhatsApp: {whatsappExplanation.noCostExample.cost}</p>
          </div>
          <div>
            <p className="mb-2 font-semibold text-ink-900">Cuando si se paga WhatsApp (empresa inicia):</p>
            {whatsappExplanation.paidCases.map((item) => (
              <p key={item}>- {item}</p>
            ))}
          </div>
        </CardContent>
      </Card>

      <section className="space-y-4">
        <SectionHeader title="Planes mensuales" subtitle="Estructura comercial para operacion continua." />
        <div className="grid gap-4 xl:grid-cols-3">
          {recurringPlans.map((plan) => (
            <Card key={plan.id}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="text-base font-semibold text-brand-700">{plan.priceLabel}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-ink-700">
                <p>{plan.includedConversations}</p>
                <p>Canales: {plan.channels.join(" + ")}</p>
                {plan.features.map((item) => (
                  <p key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-600" />
                    {item}
                  </p>
                ))}
                <p className="rounded-xl bg-ink-100 p-3 text-xs">{plan.aiNote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader title="Add-ons disponibles" subtitle="Servicios adicionales para escalar capacidades." />
        <div className="grid gap-4 xl:grid-cols-2">
          {addons.map((addon) => (
            <Card key={addon.name}>
              <CardHeader>
                <CardTitle>{addon.name}</CardTitle>
                <CardDescription>Desde {formatCop(addon.from)}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-ink-700">
                <p className="font-semibold text-ink-900">Ejemplos</p>
                <p>{addon.examples.join(" | ")}</p>
                <p className="font-semibold text-ink-900">Incluye</p>
                {addon.includes.map((item) => (
                  <p key={item}>- {item}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Ventajas de usar WhatsApp</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-ink-700">
            {whatsappAdvantages.map((item) => (
              <p key={item}>- {item}</p>
            ))}
            <p className="mt-3 rounded-xl bg-emerald-100 p-3 text-emerald-900">
              Muchas organizaciones logran reducir entre 40% y 60% de llamadas al call center usando chatbots.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Nota importante</CardTitle>
            <CardDescription>Mayor esfuerzo tecnico en proyectos de caja de compensacion</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-ink-700">
            {importantNotes.technicalEffort.map((item) => (
              <p key={item} className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-brand-600" />
                {item}
              </p>
            ))}
            <p className="font-semibold text-ink-900">Estas integraciones permiten consultar de forma segura:</p>
            <p>{importantNotes.secureDataAccess.join(" | ")}</p>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
