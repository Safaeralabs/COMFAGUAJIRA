import { Badge } from "@/components/ui/badge";

export function IntentBadge({ intent }: { intent: string }) {
  return <Badge className="bg-violet-100 text-violet-800">{intent}</Badge>;
}
