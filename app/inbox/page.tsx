"use client";

import { useMemo, useState } from "react";
import { Filter } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/common/section-header";
import { conversations } from "@/data/conversations";
import { ConversationList } from "@/components/inbox/conversation-list";
import { ChatWindow } from "@/components/inbox/chat-window";
import { AgentPanel } from "@/components/inbox/agent-panel";

const channels = ["Todos", "Web", "WhatsApp", "Instagram", "TikTok"] as const;
const statuses = ["Todos", "nuevo", "en proceso", "escalado", "resuelto"] as const;

export default function InboxPage() {
  const [channel, setChannel] = useState<(typeof channels)[number]>("Todos");
  const [status, setStatus] = useState<(typeof statuses)[number]>("Todos");
  const [selectedId, setSelectedId] = useState(conversations[0].id);

  const filtered = useMemo(
    () =>
      conversations.filter((conversation) => {
        const channelOk = channel === "Todos" || conversation.channel === channel;
        const statusOk = status === "Todos" || conversation.status === status;
        return channelOk && statusOk;
      }),
    [channel, status]
  );

  const selected = filtered.find((item) => item.id === selectedId) ?? filtered[0] ?? conversations[0];

  return (
    <PageShell>
      <SectionHeader title="Bandeja unificada omnicanal" subtitle="Vista tipo CRM/helpdesk para gestion centralizada de conversaciones." />

      <div className="grid gap-4 rounded-2xl border border-ink-200 bg-white p-3 md:grid-cols-2">
        <label className="flex items-center gap-2 text-sm text-ink-600">
          <Filter className="h-4 w-4 text-brand-600" />
          Canal
          <select value={channel} onChange={(e) => setChannel(e.target.value as (typeof channels)[number])} className="ml-auto rounded-lg border border-ink-300 px-2 py-1">
            {channels.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm text-ink-600">
          Estado
          <select value={status} onChange={(e) => setStatus(e.target.value as (typeof statuses)[number])} className="ml-auto rounded-lg border border-ink-300 px-2 py-1">
            {statuses.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-4 xl:grid-cols-[260px_1fr_320px]">
        <aside className="rounded-2xl border border-ink-200 bg-white p-3">
          <p className="mb-3 text-sm font-semibold text-ink-900">Conversaciones</p>
          <ConversationList items={filtered} selectedId={selected.id} onSelect={setSelectedId} />
        </aside>
        <ChatWindow conversation={selected} />
        <AgentPanel conversation={selected} />
      </div>
    </PageShell>
  );
}
