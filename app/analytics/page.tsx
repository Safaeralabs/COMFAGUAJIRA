"use client";

import { useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/common/section-header";
import { KPIStatCard } from "@/components/common/kpi-stat-card";
import { ChartCard } from "@/components/common/chart-card";
import { kpiCards, conversationsByChannel, peakHours, contactReasons, advisorsPerformance } from "@/data/metrics";
import { intentBreakdown, sentimentDistribution } from "@/data/intents";
import { Button } from "@/components/ui/button";

const ranges = ["Hoy", "7 dias", "30 dias", "90 dias"] as const;
const pieColors = ["#1d4ed8", "#64748b", "#f43f5e"];

export default function AnalyticsPage() {
  const [range, setRange] = useState<(typeof ranges)[number]>("30 dias");

  return (
    <PageShell>
      <SectionHeader
        title="Dashboard BI / Analitica"
        subtitle="Vista ejecutiva para seguimiento de operacion y toma de decisiones."
        action={
          <div className="flex flex-wrap gap-2">
            {ranges.map((item) => (
              <Button key={item} variant={range === item ? "default" : "outline"} size="sm" onClick={() => setRange(item)}>
                {item}
              </Button>
            ))}
          </div>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {kpiCards.map((kpi) => (
          <KPIStatCard key={kpi.label} label={kpi.label} value={kpi.value} trend={kpi.trend} />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <ChartCard title="Conversaciones por canal" subtitle={`Rango seleccionado: ${range}`}>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={conversationsByChannel}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="channel" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
        <ChartCard title="Intenciones mas frecuentes">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={intentBreakdown}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" />
                <YAxis type="category" dataKey="intent" width={120} />
                <Tooltip />
                <Bar dataKey="volume" fill="#0f766e" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      <div className="grid gap-4 xl:grid-cols-[0.6fr_0.4fr]">
        <ChartCard title="Sentimiento de conversaciones">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={sentimentDistribution} dataKey="value" nameKey="name" outerRadius={100} label>
                  {sentimentDistribution.map((entry, index) => (
                    <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
        <ChartCard title="Horarios pico (heat level)">
          <div className="space-y-2">
            {peakHours.map((item) => (
              <div key={item.hour} className="flex items-center gap-3">
                <div className="w-12 text-xs text-ink-500">{item.hour}</div>
                <div className="h-3 flex-1 rounded-full bg-ink-100">
                  <div className="h-3 rounded-full bg-brand-500" style={{ width: `${item.level}%` }} />
                </div>
                <div className="w-8 text-xs text-ink-600">{item.level}</div>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <ChartCard title="Motivos de contacto">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-ink-200 text-left text-ink-500">
                  <th className="pb-2 font-medium">Motivo</th>
                  <th className="pb-2 font-medium">Volumen</th>
                  <th className="pb-2 font-medium">Resolucion</th>
                </tr>
              </thead>
              <tbody>
                {contactReasons.map((row) => (
                  <tr key={row.reason} className="border-b border-ink-100">
                    <td className="py-2">{row.reason}</td>
                    <td className="py-2">{row.volume}</td>
                    <td className="py-2">{row.resolutionRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartCard>

        <ChartCard title="Desempeno de asesores (mock)">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-ink-200 text-left text-ink-500">
                  <th className="pb-2 font-medium">Asesor</th>
                  <th className="pb-2 font-medium">Casos</th>
                  <th className="pb-2 font-medium">Tiempo promedio</th>
                  <th className="pb-2 font-medium">Satisfaccion</th>
                </tr>
              </thead>
              <tbody>
                {advisorsPerformance.map((row) => (
                  <tr key={row.advisor} className="border-b border-ink-100">
                    <td className="py-2">{row.advisor}</td>
                    <td className="py-2">{row.assigned}</td>
                    <td className="py-2">{row.avgTime}</td>
                    <td className="py-2">{row.sat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartCard>
      </div>
    </PageShell>
  );
}
