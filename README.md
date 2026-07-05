# Bloom Studio Salon

Modern website for [Bloom Studio Salon](https://www.bloomhairstudiosalon.com) — a luxury four-chair hair salon in Avon, Indiana.

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

## Build

```bash
npm run build
npm start
```
