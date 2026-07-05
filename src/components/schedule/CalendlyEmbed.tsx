"use client";

import { useEffect } from "react";

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

interface CalendlyEmbedProps {
  url: string;
  className?: string;
}

export function CalendlyEmbed({ url, className = "" }: CalendlyEmbedProps) {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_SCRIPT}"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  if (!url) {
    return (
      <div
        className={`rounded-2xl border border-dashed border-border bg-accent-soft/30 p-12 text-center ${className}`}
      >
        <p className="font-serif text-xl text-text">Online scheduling coming soon</p>
        <p className="mt-3 text-sm text-muted">
          Set the stylist&apos;s Calendly URL in your environment to enable online booking.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`calendly-inline-widget min-h-[650px] w-full overflow-hidden rounded-2xl border border-border bg-surface ${className}`}
      data-url={url}
      style={{ minWidth: "320px", height: "650px" }}
    />
  );
}
