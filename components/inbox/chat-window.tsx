import { Conversation } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ChatWindow({ conversation }: { conversation: Conversation }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-ink-200 bg-white">
      <div className="border-b border-ink-200 p-4">
        <p className="text-sm font-semibold text-ink-900">Conversacion activa</p>
        <p className="text-xs text-ink-500">{conversation.updatedAt}</p>
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {conversation.messages.map((msg) => {
          const isUser = msg.sender === "user";
          return (
            <div key={msg.id} className={cn("max-w-[80%] rounded-2xl p-3 text-sm", isUser ? "ml-auto bg-brand-600 text-white" : "bg-ink-100 text-ink-800")}>
              <p>{msg.text}</p>
              <p className={cn("mt-1 text-[11px]", isUser ? "text-brand-100" : "text-ink-500")}>{msg.time}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-2 border-t border-ink-200 p-4">
        <Button size="sm">Responder</Button>
        <Button size="sm" variant="secondary">
          Usar plantilla
        </Button>
        <Button size="sm" variant="outline">
          Escalar
        </Button>
        <Button size="sm" variant="outline">
          Marcar resuelto
        </Button>
        <Button size="sm" variant="ghost">
          Agregar nota
        </Button>
      </div>
    </div>
  );
}
