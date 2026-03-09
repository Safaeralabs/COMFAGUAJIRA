import { Channel } from "@/types";
import { Badge } from "@/components/ui/badge";

const styles: Record<Channel, string> = {
  Web: "bg-sky-100 text-sky-800",
  WhatsApp: "bg-emerald-100 text-emerald-800",
  Instagram: "bg-pink-100 text-pink-800",
  TikTok: "bg-slate-200 text-slate-800"
};

export function ChannelBadge({ channel }: { channel: Channel }) {
  return <Badge className={styles[channel]}>{channel}</Badge>;
}
