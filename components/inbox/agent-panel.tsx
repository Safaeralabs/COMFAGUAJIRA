import { users } from "@/data/users";
import { Conversation } from "@/types";
import { IntentBadge } from "@/components/common/intent-badge";
import { SentimentBadge } from "@/components/common/sentiment-badge";
import { StatusBadge } from "@/components/common/status-badge";

export function AgentPanel({ conversation }: { conversation: Conversation }) {
  const user = users.find((item) => item.id === conversation.userId);

  return (
    <div className="space-y-4 rounded-2xl border border-ink-200 bg-white p-4">
      <div>
        <p className="text-sm text-ink-500">Usuario</p>
        <p className="font-semibold text-ink-900">{user?.name ?? "Usuario no identificado"}</p>
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>
          <p className="text-ink-500">Canal</p>
          <p className="font-medium text-ink-900">{conversation.channel}</p>
        </div>
        <div>
          <p className="text-ink-500">Prioridad</p>
          <p className="font-medium capitalize text-ink-900">{conversation.priority}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <IntentBadge intent={conversation.intent} />
        <SentimentBadge sentiment={conversation.sentiment} />
        <StatusBadge status={conversation.status} />
      </div>

      <div className="space-y-1 text-sm">
        <p className="text-ink-500">Historial de contactos</p>
        <p className="font-semibold text-ink-900">{user?.contactsHistory ?? 0} interacciones</p>
      </div>

      <div className="space-y-1 text-sm">
        <p className="text-ink-500">Asesor asignado</p>
        <p className="font-semibold text-ink-900">{conversation.assignedAgent}</p>
      </div>

      <div className="space-y-2 border-t border-ink-200 pt-3">
        <p className="text-sm font-semibold text-ink-900">Timeline</p>
        {conversation.events.map((event) => (
          <div key={event.id} className="rounded-lg bg-ink-100 p-2 text-xs">
            <p className="font-medium text-ink-800">{event.label}</p>
            <p className="text-ink-500">{event.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
