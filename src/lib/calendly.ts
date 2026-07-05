const stylistCalendlyEnvKeys: Record<string, string> = {
  amanda: "NEXT_PUBLIC_CALENDLY_AMANDA_URL",
  brittany: "NEXT_PUBLIC_CALENDLY_BRITTANY_URL",
  sydney: "NEXT_PUBLIC_CALENDLY_SYDNEY_URL",
  jillane: "NEXT_PUBLIC_CALENDLY_JILLANE_URL",
};

export function usesCalendly(slug: string): boolean {
  return slug in stylistCalendlyEnvKeys;
}

export function getCalendlyUrl(slug: string): string {
  const envKey = stylistCalendlyEnvKeys[slug];
  if (!envKey) return "";
  return process.env[envKey] ?? "";
}
