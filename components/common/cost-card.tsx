import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCop } from "@/lib/utils";

interface CostCardProps {
  name: string;
  description: string;
  setup: number;
  monthly: number;
  highlights: string[];
}

export function CostCard({ name, description, setup, monthly, highlights }: CostCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="rounded-xl bg-brand-50 p-4">
          <p className="text-xs uppercase tracking-wide text-brand-700">Activacion</p>
          <p className="text-2xl font-bold text-brand-800">{formatCop(setup)}</p>
        </div>
        <div className="rounded-xl bg-ink-100 p-4">
          <p className="text-xs uppercase tracking-wide text-ink-500">Mensual estimado</p>
          <p className="text-2xl font-bold text-ink-900">{formatCop(monthly)}</p>
        </div>
        <ul className="space-y-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-ink-700">
              <CheckCircle2 className="h-4 w-4 text-brand-600" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
