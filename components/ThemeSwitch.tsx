import React from "react";

type ThemeMode = "light" | "dark";

type ThemeSwitchProps = {
  mode: ThemeMode;
  onToggle: () => void;
};

export default function ThemeSwitch({ mode, onToggle }: ThemeSwitchProps) {
  const nextLabel = mode === "dark" ? "Dark" : "Light";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle color theme"
      aria-pressed={mode === "dark"}
      className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-divider)] bg-[color:var(--color-surface-muted)] px-3 py-2 text-sm font-semibold text-[color:var(--color-text-primary)] transition-colors hover:bg-[color:var(--color-brand-soft)]"
    >
      <span className="inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--color-brand)]" aria-hidden="true" />
      <span>{nextLabel}</span>
    </button>
  );
}
