"use client";

import { Conversation } from "@/types";
import { ChannelBadge } from "@/components/common/channel-badge";
import { StatusBadge } from "@/components/common/status-badge";
import { cn } from "@/lib/utils";

interface ConversationListProps {
  items: Conversation[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function ConversationList({ items, selectedId, onSelect }: ConversationListProps) {
  return (
    <div className="space-y-2">
      {items.map((conversation) => (
        <button
          key={conversation.id}
          onClick={() => onSelect(conversation.id)}
          className={cn(
            "w-full rounded-xl border p-3 text-left transition-colors",
            selectedId === conversation.id ? "border-brand-400 bg-brand-50" : "border-ink-200 hover:bg-ink-100"
          )}
        >
          <div className="mb-2 flex items-center justify-between gap-2">
            <ChannelBadge channel={conversation.channel} />
            <StatusBadge status={conversation.status} />
          </div>
          <p className="line-clamp-1 text-sm font-semibold text-ink-900">{conversation.lastMessage}</p>
          <div className="mt-2 flex items-center justify-between text-xs text-ink-500">
            <span>{conversation.updatedAt}</span>
            {conversation.unread > 0 ? (
              <span className="rounded-full bg-brand-600 px-2 py-0.5 font-semibold text-white">
                {conversation.unread}
              </span>
            ) : null}
          </div>
        </button>
      ))}
    </div>
  );
}
