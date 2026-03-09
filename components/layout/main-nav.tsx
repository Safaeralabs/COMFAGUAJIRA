"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, ChartColumn, CircleDollarSign, House, Inbox, MessageCircleMore, Send, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Inicio", icon: House },
  { href: "/demo-web", label: "Demo Web", icon: Bot },
  { href: "/whatsapp", label: "WhatsApp", icon: MessageCircleMore },
  { href: "/instagram", label: "Instagram", icon: Smartphone },
  { href: "/tiktok", label: "TikTok", icon: Send },
  { href: "/inbox", label: "Inbox", icon: Inbox },
  { href: "/analytics", label: "Analytics", icon: ChartColumn },
  { href: "/costos", label: "Costos", icon: CircleDollarSign }
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-ink-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-brand-700 px-2.5 py-1.5 text-xs font-bold tracking-wide text-white">CG</div>
          <div>
            <p className="text-sm font-bold text-ink-900">COMFAGUAJIRA Chatbot</p>
            <p className="text-xs text-ink-500">Asistente virtual multicanal para atencion 24/7</p>
          </div>
        </div>
        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                  active ? "bg-brand-100 text-brand-800" : "text-ink-600 hover:bg-ink-100"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="scrollbar-hide flex overflow-x-auto border-t border-ink-200/80 px-2 py-2 xl:hidden">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium",
                active ? "bg-brand-100 text-brand-800" : "text-ink-600"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
