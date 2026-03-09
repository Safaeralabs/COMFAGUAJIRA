import Link from "next/link";
import { ArrowRight, Bot, ChartNoAxesCombined, Clock3, MessagesSquare, Sparkles, Users } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/common/section-header";
import { KPIStatCard } from "@/components/common/kpi-stat-card";
import { heroKpis } from "@/data/metrics";

const channels = [
  { name: "Web", desc: "Widget en sitio institucional y portal de servicios." },
  { name: "WhatsApp", desc: "Atencion 24/7 con respuestas automaticas y plantillas." },
  { name: "Instagram", desc: "Gestion de DMs para soporte y captacion de leads." },
  { name: "TikTok", desc: "Derivacion inteligente desde comentarios y mensajes." }
];

const benefits = [
  { icon: Clock3, title: "Atencion 24/7", text: "Respuesta inmediata en horarios de alta demanda." },
  { icon: Users, title: "Escalamiento humano", text: "Transferencia controlada a asesor en segundos." },
  { icon: MessagesSquare, title: "Centralizacion", text: "Bandeja unica para todos los canales." },
  { icon: ChartNoAxesCombined, title: "Analitica y BI", text: "KPIs en tiempo real para decisiones ejecutivas." },
  { icon: Sparkles, title: "Campanas controladas", text: "Mensajeria saliente con trazabilidad comercial." }
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="grid gap-6 rounded-3xl border border-brand-100 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 p-8 text-white lg:grid-cols-2 lg:p-10">
        <div className="space-y-5">
          <p className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            Demo Comercial
          </p>
          <h1 className="font-[var(--font-space)] text-3xl font-bold leading-tight lg:text-5xl">
            COMFAGUAJIRA Chatbot
          </h1>
          <p className="max-w-xl text-sm text-brand-50 lg:text-base">
            Asistente virtual multicanal para atencion 24/7. Demo frontend-only para validar experiencia de usuario, flujo de atencion e impacto de negocio.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/demo-web">
              <Button variant="secondary" className="bg-white text-brand-700 hover:bg-brand-50">
                Ver demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/costos">
              <Button variant="outline" className="border-white/70 bg-transparent text-white hover:bg-white/10">
                Ver costos
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {heroKpis.map((kpi) => (
            <div key={kpi.label} className="rounded-2xl bg-white/15 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-brand-50">{kpi.label}</p>
              <p className="mt-2 text-2xl font-bold">{kpi.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader title="Beneficios de negocio" subtitle="Propuesta orientada a eficiencia operativa y experiencia de usuario." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="border-ink-100">
                <CardContent className="space-y-3 p-5">
                  <div className="inline-flex rounded-lg bg-brand-100 p-2 text-brand-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-semibold text-ink-900">{item.title}</p>
                  <p className="text-sm text-ink-500">{item.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader title="Canales soportados" subtitle="Mismo motor de atencion, experiencia adaptada a cada canal." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {channels.map((channel) => (
            <Card key={channel.name}>
              <CardContent className="space-y-2 p-6">
                <div className="inline-flex rounded-lg bg-ink-100 p-2 text-ink-700">
                  <Bot className="h-5 w-5" />
                </div>
                <p className="text-lg font-semibold text-ink-900">{channel.name}</p>
                <p className="text-sm text-ink-500">{channel.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader title="KPIs destacados" subtitle="Indicadores claves para presentacion ejecutiva." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {heroKpis.map((kpi) => (
            <KPIStatCard key={kpi.label} label={kpi.label} value={kpi.value} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
