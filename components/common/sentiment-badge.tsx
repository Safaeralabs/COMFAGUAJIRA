import { Sentiment } from "@/types";
import { Badge } from "@/components/ui/badge";

const styles: Record<Sentiment, string> = {
  positivo: "bg-emerald-100 text-emerald-800",
  neutro: "bg-slate-200 text-slate-800",
  negativo: "bg-rose-100 text-rose-800"
};

export function SentimentBadge({ sentiment }: { sentiment: Sentiment }) {
  return <Badge className={styles[sentiment]}>{sentiment}</Badge>;
}
