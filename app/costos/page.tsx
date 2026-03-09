import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/common/section-header";
import { CostCard } from "@/components/common/cost-card";
import { Card, CardContent } from "@/components/ui/card";
import { commercialScenarios, monthlyUsage, setupCosts } from "@/data/pricing";
import { formatCop } from "@/lib/utils";

export default function CostosPage() {
  return (
    <PageShell>
      <SectionHeader
        title="Vista de costos estimados"
        subtitle="Resumen ejecutivo para propuesta comercial: activacion, uso mensual y escenarios."
      />

      <div className="grid gap-4 xl:grid-cols-3">
        {commercialScenarios.map((scenario) => (
          <CostCard
            key={scenario.id}
            name={scenario.name}
            description={scenario.description}
            setup={scenario.setup}
            monthly={scenario.monthly}
            highlights={scenario.highlights}
          />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[0.55fr_0.45fr]">
        <Card>
          <CardContent className="p-5">
            <p className="mb-3 text-lg font-semibold text-ink-900">Costos de implementacion</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-ink-200 text-left text-ink-500">
                    <th className="pb-2 font-medium">Concepto</th>
                    <th className="pb-2 font-medium">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {setupCosts.map((row) => (
                    <tr key={row.item} className="border-b border-ink-100">
                      <td className="py-2">{row.item}</td>
                      <td className="py-2">
                        {formatCop(row.value)} {row.iva ? "+ IVA" : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <p className="mb-3 text-lg font-semibold text-ink-900">Uso mensual del chatbot</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-ink-200 text-left text-ink-500">
                    <th className="pb-2 font-medium">Conversaciones</th>
                    <th className="pb-2 font-medium">Valor mensual</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyUsage.map((row) => (
                    <tr key={row.conversations} className="border-b border-ink-100">
                      <td className="py-2">{row.conversations.toLocaleString("es-CO")}</td>
                      <td className="py-2">{formatCop(row.value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
