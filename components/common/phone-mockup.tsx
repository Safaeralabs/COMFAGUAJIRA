import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneMockup({
  title,
  children,
  className
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-sm rounded-[2rem] border-8 border-ink-900 bg-white shadow-soft", className)}>
      <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-ink-300" />
      <div className="p-4">
        <p className="mb-3 text-center text-sm font-semibold text-ink-700">{title}</p>
        <div className="min-h-[520px] rounded-2xl bg-ink-100 p-3">{children}</div>
      </div>
    </div>
  );
}
