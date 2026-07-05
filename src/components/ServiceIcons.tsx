type IconProps = {
  className?: string;
};

export function ColorIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c2-6 4-10 8-14s8-4 8-4-2 6-4 10-6 8-12 8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h8" />
    </svg>
  );
}

export function ScissorsIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path strokeLinecap="round" d="M8.5 7.5L20 18M8.5 16.5L20 6" />
    </svg>
  );
}

export function TreatmentIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.4 4.2L18 8.6l-4.2 1.4L12 14l-1.4-4.2L6.4 8.6l4.2-1.4L12 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 18c1.5-2 3-3 7-3s5.5 1 7 3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16" />
    </svg>
  );
}

export function BridalIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4c-2 2-5 3-7 3 0 4 2 7 7 9 5-2 7-5 7-9-2 0-5-1-7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l1.5 1.5L15 9" />
    </svg>
  );
}

export function LashBrowIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s3.5-5 10-5 10 5 10 5-3.5 5-10 5-10-5-10-5z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

export function ExtensionsIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 4v16M10 6v14M14 8v12M18 10v10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16" />
    </svg>
  );
}

export function ConsultationIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path strokeLinecap="round" d="M8 3v4M16 3v4M3 10h18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 15h4M8 18h6" />
    </svg>
  );
}

export type ServiceIconName =
  | "color"
  | "scissors"
  | "treatment"
  | "bridal"
  | "lash"
  | "extensions"
  | "consultation";

const iconMap = {
  color: ColorIcon,
  scissors: ScissorsIcon,
  treatment: TreatmentIcon,
  bridal: BridalIcon,
  lash: LashBrowIcon,
  extensions: ExtensionsIcon,
  consultation: ConsultationIcon,
};

export function ServiceIcon({ name, className }: { name: ServiceIconName; className?: string }) {
  const Icon = iconMap[name];
  return <Icon className={className} />;
}
