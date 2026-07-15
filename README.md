# Willow & Mane

Modern website for Willow & Mane — a luxury four-chair hair salon in Avon, Indiana.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```txt
src/
  app/           # Pages (Home, Services, New Guest, Studio, Stylists, Bridal)
  components/    # Reusable UI components
  data/          # Site content, services menu, stylist profiles
public/images/   # Salon photography and brand assets
```

## Updating Content

- **Site info & links:** `src/data/site.ts`
- **Service menu:** `src/data/services.ts`
- **Stylists:** `src/data/stylists.ts`
- **Bridal pricing:** `src/data/bridal.ts`

## Stylist scheduling (Calendly)

Amanda, Brittany, Maya, and Jillane use inline Calendly embeds on their profile pages. Jennifer Dodd continues to use online booking.

1. Copy `.env.example` to `.env.local`
2. Add each stylist's Calendly event URL:

```bash
NEXT_PUBLIC_CALENDLY_AMANDA_URL=https://calendly.com/...
NEXT_PUBLIC_CALENDLY_BRITTANY_URL=https://calendly.com/...
NEXT_PUBLIC_CALENDLY_MAYA_URL=https://calendly.com/...
NEXT_PUBLIC_CALENDLY_JILLANE_URL=https://calendly.com/...
```

3. Restart the dev server after changing env vars

If a URL is unset, the stylist page shows a placeholder plus email/phone fallback links.

## Build

```bash
npm run build
npm start
```
