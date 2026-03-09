import { ReactNode } from "react";

export function SectionHeader({
  title,
  subtitle,
  action
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-ink-900">{title}</h2>
        {subtitle ? <p className="text-sm text-ink-500">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}
