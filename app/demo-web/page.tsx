"use client";

import { useState } from "react";
import { MessageCircleMore, SendHorizontal, UserRound } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { webChatQuickReplies } from "@/data/conversations";

type ChatMessage = {
  id: string;
  sender: "bot" | "user" | "agent";
  text: string;
};

const initialMessages: ChatMessage[] = [
  {
    id: "1",
    sender: "bot",
    text: "Hola, soy el asistente virtual de COMFAGUAJIRA. Te ayudo con tramites y consultas."
  }
];

export default function DemoWebPage() {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [typing, setTyping] = useState(false);

  const simulateFlow = (quickReply: string) => {
    const userMsg = { id: crypto.randomUUID(), sender: "user" as const, text: quickReply };
    setMessages((prev) => [...prev, userMsg]);
    setTyping(true);
    setTimeout(() => {
      const botReply = quickReply === "Hablar con asesor"
        ? "Te voy a comunicar con un asesor."
        : `Perfecto. Estoy consultando informacion de ${quickReply.toLowerCase()}.`;
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), sender: "bot", text: botReply }]);
      setTyping(false);
      if (quickReply === "Hablar con asesor") {
        setTimeout(() => {
          setMessages((prev) => [...prev, { id: crypto.randomUUID(), sender: "agent", text: "Hola, soy Ana Maria. Ya estoy revisando tu caso." }]);
        }, 1200);
      }
    }, 1100);
  };

  return (
    <PageShell>
      <SectionHeader
        title="Demo del chatbot en sitio web"
        subtitle="Simulacion de portal institucional con widget flotante de atencion."
        action={<Button onClick={() => setMessages(initialMessages)}>Simular flujo</Button>}
      />

      <div className="relative grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <Card className="overflow-hidden">
          <div className="border-b border-ink-200 bg-brand-700 px-6 py-4 text-white">
            <p className="text-xs uppercase tracking-[0.16em] text-brand-100">Portal institucional</p>
            <p className="text-lg font-semibold">COMFAGUAJIRA - Servicios y beneficios</p>
          </div>
          <CardContent className="space-y-4 p-6">
            <div className="rounded-2xl bg-ink-100 p-6">
              <h3 className="text-2xl font-bold text-ink-900">Atencion integral para afiliados y empresas</h3>
              <p className="mt-2 text-sm text-ink-600">
                Consulta subsidios, certificados, afiliacion, recreacion y programas de educacion desde un solo canal digital.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {["Subsidio", "Educacion", "Recreacion"].map((item) => (
                <div key={item} className="rounded-xl border border-ink-200 p-4">
                  <p className="font-semibold text-ink-800">{item}</p>
                  <p className="text-xs text-ink-500">Informacion y tramites en linea.</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="relative">
          <Button
            size="icon"
            className="absolute -top-16 right-0 h-14 w-14 rounded-full shadow-soft"
            onClick={() => setOpen((v) => !v)}
          >
            <MessageCircleMore className="h-6 w-6" />
          </Button>
          {open ? (
            <Card className="h-[560px] overflow-hidden">
              <div className="border-b border-ink-200 bg-brand-600 p-4 text-white">
                <p className="font-semibold">COMFAGUAJIRA Chatbot</p>
                <p className="text-xs text-brand-100">Disponible 24/7</p>
              </div>
              <div className="h-[355px] space-y-3 overflow-y-auto bg-[#f4f8ff] p-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                      msg.sender === "user"
                        ? "ml-auto bg-brand-600 text-white"
                        : msg.sender === "agent"
                          ? "bg-emerald-100 text-emerald-900"
                          : "bg-white text-ink-800"
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>
                ))}
                {typing ? <p className="text-xs text-ink-500">escribiendo...</p> : null}
              </div>
              <div className="space-y-3 border-t border-ink-200 p-4">
                <div className="flex flex-wrap gap-2">
                  {webChatQuickReplies.map((item) => (
                    <button
                      key={item}
                      onClick={() => simulateFlow(item)}
                      className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 transition hover:bg-brand-100"
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-ink-200 px-3 py-2">
                  <UserRound className="h-4 w-4 text-ink-400" />
                  <input
                    disabled
                    className="w-full bg-transparent text-sm text-ink-400 outline-none"
                    value="Escribe tu mensaje..."
                    readOnly
                  />
                  <SendHorizontal className="h-4 w-4 text-brand-500" />
                </div>
              </div>
            </Card>
          ) : null}
        </div>
      </div>
    </PageShell>
  );
}
