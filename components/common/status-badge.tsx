import { TicketStatus } from "@/types";
import { Badge } from "@/components/ui/badge";

const styles: Record<TicketStatus, string> = {
  nuevo: "bg-blue-100 text-blue-800",
  "en proceso": "bg-amber-100 text-amber-800",
  escalado: "bg-orange-100 text-orange-800",
  resuelto: "bg-emerald-100 text-emerald-800"
};

export function StatusBadge({ status }: { status: TicketStatus }) {
  return <Badge className={styles[status]}>{status}</Badge>;
}
