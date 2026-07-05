"use client";

import { useEffect, useRef } from "react";

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

interface CalendlyEmbedProps {
  url: string;
  className?: string;
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        resize?: boolean;
      }) => void;
    };
  }
}

function loadCalendlyScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly) return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_SCRIPT}"]`);
  if (existing) {
    return new Promise((resolve) => {
      if (window.Calendly) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Calendly"));
    document.body.appendChild(script);
  });
}

export function CalendlyEmbed({ url, className = "" }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!url || !containerRef.current) return;

    let cancelled = false;
    const container = containerRef.current;

    const init = async () => {
      try {
        await loadCalendlyScript();
        if (cancelled || !containerRef.current) return;

        container.innerHTML = "";

        window.Calendly?.initInlineWidget({
          url,
          parentElement: container,
          resize: true,
        });
      } catch {
        // Widget failed to load — placeholder remains empty
      }
    };

    void init();

    return () => {
      cancelled = true;
      container.innerHTML = "";
    };
  }, [url]);

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
      ref={containerRef}
      className={`min-h-[650px] w-full overflow-hidden rounded-2xl border border-border bg-surface ${className}`}
      style={{ minWidth: "320px", height: "650px" }}
    />
  );
}
