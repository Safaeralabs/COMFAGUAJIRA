import { Card, CardContent } from "@/components/ui/card";

export function KPIStatCard({
  label,
  value,
  trend
}: {
  label: string;
  value: string;
  trend?: string;
}) {
  return (
    <Card className="border-ink-100">
      <CardContent className="space-y-2 p-5">
        <p className="text-sm text-ink-500">{label}</p>
        <div className="flex items-end justify-between gap-2">
          <p className="text-2xl font-bold text-ink-900">{value}</p>
          {trend ? <span className="text-xs font-semibold text-brand-700">{trend}</span> : null}
        </div>
      </CardContent>
    </Card>
  );
}
