import { ServiceIcon, type ServiceIconName } from "@/components/ServiceIcons";

type ServiceInfoCardProps = {
  infoId: string;
  title: string;
  description: string;
  priceNote: string;
  icon: ServiceIconName;
  content: string;
};

export default function ServiceInfoCard({
  infoId,
  title,
  description,
  priceNote,
  icon,
  content,
}: ServiceInfoCardProps) {
  return (
    <details
      id={infoId}
      className="group scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-accent-soft/35 shadow-sm transition duration-300 open:border-accent/40 open:bg-accent-soft/55 open:shadow-md"
    >
      <summary className="cursor-pointer list-none p-4 transition hover:bg-accent-soft/45 sm:p-5 [&::-webkit-details-marker]:hidden">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface text-accent shadow-sm transition group-open:bg-accent group-open:text-white">
            <ServiceIcon name={icon} className="h-6 w-6" />
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-serif text-lg font-medium leading-tight text-text sm:text-xl">
                {title}
              </h3>
              <span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-muted transition group-open:rotate-180 group-open:border-accent group-open:text-accent"
                aria-hidden="true"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
            <p className="mt-1.5 text-sm leading-snug text-muted">{description}</p>
            <span className="mt-2 inline-block text-xs font-semibold text-accent sm:text-sm">
              {priceNote}
            </span>
          </div>
        </div>
      </summary>

      <div className="border-t border-border/70 bg-surface/90 px-4 pb-4 sm:px-5 sm:pb-5">
        <p className="pt-3.5 text-sm leading-relaxed text-muted">{content}</p>
      </div>
    </details>
  );
}
